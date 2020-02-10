import React, { Component } from 'react';
import { auth, messageRef, roomRef, usersRef } from './firebase-config';
import 'bulma/css/bulma.css' ;
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ChatPanel from './components/ChatPanel';
import firebaseApp from 'firebase';

class App extends Component {
  state = {
    goToLogin: false,
    isLoggedIn: false,
    email: '',
    uid: null,
    rooms: {},
    selectedRoom: null,
    messages: {},
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { email, uid } = user;
        this.setState({
          isLoggedIn: true,
          email,
          uid,
        });
      };
      this.loadData();
      usersRef
        .orderByChild('email')
        .equalTo(this.state.email)
        .on('value', snapshot => {
          const fullSnap = snapshot.val();
          const filteredSnap = fullSnap[Object.keys(fullSnap)[0]];
          const roomsSnap = filteredSnap.rooms;
          const myRoomsKeys = Object.keys(roomsSnap);
          return myRoomsKeys;
        })
        .then(snapshot => {
          console.log(snapshot)
        })
      roomRef.on('value', snapshot => {
        const rooms = snapshot.val();
        console.log(rooms);
        this.setState({
          rooms,
        });
      });
      messageRef.on('child_added', snapshot => {
        const message = snapshot.val();
        const key = snapshot.key;
        if(message.roomId === this.state.selectedRoom) {
          this.setState({
            messages: {
              ...this.state.messages,
              [key]: message,
            }
          });
        };
      });
    });
  };

  loadData= () => {
    roomRef.once('value')
      .then(snapshot => {
        const rooms = snapshot.val();
        const selectedRoom = Object.keys(rooms)[0];
        this.setState({
          rooms,
          selectedRoom,
        })
        return messageRef
          .orderByChild('roomId')
          .equalTo(selectedRoom)
          .once('value')
      })
      .then(snapshot => {
        const messages = snapshot.val() || {};
        this.setState({
          messages,
        })
      })
      .catch(err => console.log(err));
  }



  handleSignUp = ({ name, email, password }) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = {
          rooms: {},
          name,
          email,
        }
        usersRef.push(user);
      })
      .catch(err => console.log(err))
  };

  handleLogin = ({ email, password }) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        const { email, uid } = user.user;
        this.setState({
          isLoggedIn: true,
          email,
          uid,
        });
      })
      .catch(err => console.log(err))
  };

  handleLogout = (e) => {
    auth.signOut()
      .then(() => {
        this.setState({
          isLoggedIn: false,
          email: '',
          uid: null,
        });
      });
  };

  setRoom = (id) => {
    messageRef
      .orderByChild('roomId')
      .equalTo(id)
      .once('value')
      .then(snapshot => {
        const messages = snapshot.val() || {};
        this.setState({
          selectedRoom: id,
          messages,
        });
      })
      .catch(err => console.log(err))
  }

  addRoom = (roomName) => {
    const newRoomKey = firebaseApp.database().ref().child('rooms').push().key;
    const room = {
      created: Date.now(),
      members: {
        one: this.state.email,
        two: roomName,
      }
    };
    firebaseApp.database().ref('rooms/' + newRoomKey).set(room);
    // generate new key for the chat room and attach it to both users
    usersRef
      .orderByChild('email')
      .equalTo(roomName)
      .once('value')
      .then(snapshot => {
        const key = Object.keys(snapshot.val())[0];
        firebaseApp.database().ref('users/' + key).child('rooms').update({ [newRoomKey]: true});
      })
    usersRef
      .orderByChild('email')
      .equalTo(this.state.email)
      .once('value')
      .then(snapshot => {
        const key = Object.keys(snapshot.val())[0];
        firebaseApp.database().ref('users/' + key).child('rooms').update({ [newRoomKey]: true });
      })
    this.setState({
      selectedRoom: newRoomKey,
    });
  }

  sendMessage = (message) => {
    firebaseApp.database().ref('messages/' + this.state.selectedRoom).push(message);
  }

  toggleLoginSignUp = () => {
    this.setState(prevState => ({
      goToLogin: !prevState.goToLogin
    }));
  }



  render() {

    return (
      <div className="columns vh-100 is-gapless">
        <Sidebar 
          logout={this.handleLogout}
          rooms={this.state.rooms}
          selectedRoom={this.state.selectedRoom}
          setRoom={this.setRoom}
          addRoom={this.addRoom}
        />
          { this.state.isLoggedIn ?
            <ChatPanel
              messages={this.state.messages}
              email={this.state.email}
              roomId={this.state.selectedRoom}
              uid={this.state.uid}
              sendMessage={this.sendMessage}
            /> :
            <MainPanel logout={this.handleLogout} >
              {this.state.goToLogin ? 
                <LoginForm onLogin={this.handleLogin} toggleLoginSignUp={this.toggleLoginSignUp} /> :
                <SignUpForm onSignUp={this.handleSignUp} toggleLoginSignUp={this.toggleLoginSignUp} />
              }
            </MainPanel>
          }
      </div>
    );
  }
}

export default App;