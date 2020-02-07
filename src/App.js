import React, { Component } from 'react';
import { auth } from './firebase-config';
import 'bulma/css/bulma.css' ;
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import ChatPanel from './components/ChatPanel';

class App extends Component {
  state = {
    isLoggedIn: false,
    email: '',
    uid: null,
    rooms: {
      'hh12': {
        title: 'General',
        author: 'test@test.com',
        created: Date.now(),
      },
      'jj34': {
        title: 'Random',
        author: 'test@test.com',
        created: Date.now(),
      },
    },
    selectedRoom: 'hh12',
    messages: {
      'm100': {
        author: 'asdajnsd123123132',
        email: 'test@test.com',
        roomId: 'hh12',
        text: 'test text 1',
        created: Date.now(),
      },
      'm200': {
        author: 'asdajnsd123123132',
        email: 'test2@test.com',
        roomId: 'hh12',
        text: 'test text 2',
        created: Date.now(),
      }
    }
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
    })
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
    this.setState({
      selectedRoom: id,
    })
  }

  render() {

    return (
      <div className="columns vh-100 is-gapless">
        <Sidebar 
          logout={this.handleLogout}
          rooms={this.state.rooms}
          selectedRoom={this.state.selectedRoom}
          setRoom={this.setRoom}
        />
        <MainPanel logout={this.handleLogout} >
          { this.state.isLoggedIn ?
            <ChatPanel messages={this.state.messages}/> :
            <div>
              <SignUpForm onSignUp={this.handleSignUp} />
              <LoginForm onLogin={this.handleLogin} />
            </div>
          }
        </MainPanel>
      </div>
    );
  }
}

export default App;