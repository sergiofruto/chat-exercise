import React, { Component } from 'react';
import { auth, messageRef, roomRef } from './firebase-config';
import 'bulma/css/bulma.css' ;
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ChatPanel from './components/ChatPanel';

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
      roomRef.on('value', snapshot => {
        console.log(snapshot.val());
        const rooms = snapshot.val();
        this.setState({
          rooms,
        });
      });
      messageRef.on('child_added', snapshot => {
        console.log('lomensajito', snapshot.val());
        const message = snapshot.val();
        const key = snapshot.key;
        if(message.roomId === this.state.selectedRoom) {
          this.setState({
            messages: {
              ...this.state.messages,
              [key]: message,
            }
          })
        }
      });
    });
  }

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
        console.log('messages', snapshot.val());
        const messages = snapshot.val() || {};
        this.setState({
          messages,
        })
      })
      .catch(err => console.log(err));
  }



  handleSignUp = ({ email, password }) => {
    auth.createUserWithEmailAndPassword(email, password)
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
    const room = {
      author: this.state.uid,
      name: roomName,
      created: Date.now(),
    }
    roomRef.push(room);
    console.log('app add', roomName);
  }

  sendMessage = (message) => {
    console.log(message);
    messageRef.push(message);
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