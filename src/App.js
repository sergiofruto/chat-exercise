import React, { Component } from 'react';
import _ from 'lodash';
import { auth, messageRef, roomRef, activeTypingRef } from './firebase-config';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ChatPanel from './components/ChatPanel';
import firebaseApp from './firebase-config';

class App extends Component {
  state = {
    isLoggedIn: false,
    goToLogin: false,
    email: '',
    uid: null,
    rooms: {},
    selectedRoom: null,
    messages: {},
    otherUserTyping: false,
  }

  loadData = () => {
    roomRef.once('value')
      .then(snapshot => {
        const rooms = snapshot.val();
        const selectedRoom = Object.keys(rooms)[0];
        this.setState({
          rooms,
          selectedRoom
        });
        return messageRef
          .orderByChild('roomId')
          .equalTo(selectedRoom)
          .once('value');
      })
      .then(snapshot => {
        const messages = snapshot.val() || {};
        this.setState({
          messages
        });
      })
      .catch(err => console.error(err));
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { email, uid } = user;
        this.setState({
          email,
          uid,
          isLoggedIn: true
        });
        this.loadData();
        roomRef.on('value', snapshot => {
          const rooms = snapshot.val();
          this.setState({
            rooms
          });
        });
        messageRef
          .on('child_added', snapshot => {
            const message = snapshot.val();
            const key = snapshot.key;
            if (message.roomId === this.state.selectedRoom) {
              this.setState({
                messages: {
                  ...this.state.messages,
                  [key]: message
                }
              })
            }
          });
        activeTypingRef
          .on('child_changed', snapshot => {
            const typingKey = snapshot.key;
            const typingValue = snapshot.val();
            if (typingKey !== this.state.uid) {
              this.setState({
                otherUserTyping: typingValue,
              });
              console.log('otro esta tipeando');
              console.log(snapshot.val());
            }
          })
      }
    });
  }

  handleSignUp = ({ email, password }) => {
    auth.createUserWithEmailAndPassword(email, password)
      .catch(err => console.error(err));
  }

  handleLogin = ({ email, password }) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        const { email, uid } = user;
        this.setState({
          isLoggedIn: true,
          email,
          uid
        });
      })
      .catch(err => console.error(err));
  }

  toggleLoginSignUp = () => {
    this.setState(prevState => ({
      goToLogin: !prevState.goToLogin
    }));
  }

  handleLogout = (e) => {
    auth.signOut()
      .then(() => {
        this.setState({
          email: '',
          uid: null,
          isLoggedIn: false
        });
      });
  }

  setRoom = (id) => {
    messageRef
      .orderByChild('roomId')
      .equalTo(id)
      .once('value')
      .then(snapshot => {
        const messages = snapshot.val() || {};
        this.setState({
          selectedRoom: id,
          messages
        });
      })
      .catch(err => console.error(err));
  }

  addRoom = (roomName) => {
    const room = {
      author: this.state.uid,
      name: roomName,
      created: Date.now()
    }
    roomRef.push(room);
  }

  sendMessage = (message) => {
    messageRef.push(message);
  }

  handleIsTyping = (value) => {
    console.log(value);
    (!value) 
      ? firebaseApp.database().ref('activeTyping').update({ [this.state.uid]: false })
      : firebaseApp.database().ref('activeTyping').update({ [this.state.uid]: true }) 

  }

  debouncedHandleIsTyping = _.debounce(this.handleIsTyping, 300);

  render() {

    return (
      <div className="columns vh-100 is-gapless">
          { this.state.isLoggedIn ?
          <MainPanel className="container">
            <Sidebar 
              logout={this.handleLogout}
              rooms={this.state.rooms}
              selectedRoom={this.state.selectedRoom}
              setRoom={this.setRoom}
              addRoom={this.addRoom}
            />
            <ChatPanel
              messages={this.state.messages}
              email={this.state.email}
              roomId={this.state.selectedRoom}
              uid={this.state.uid}
              sendMessage={this.sendMessage}
              handleIsTyping={this.debouncedHandleIsTyping}
              otherUserTyping={this.state.otherUserTyping}
            />
          </MainPanel> :
            <div className="container">
              {this.state.goToLogin ?
                <LoginForm onLogin={this.handleLogin} toggleLoginSignUp={this.toggleLoginSignUp} /> :
                <SignUpForm onSignUp={this.handleSignUp} toggleLoginSignUp={this.toggleLoginSignUp} />
              }
            </div>
          }
      </div>
    );
  }
}

export default App;