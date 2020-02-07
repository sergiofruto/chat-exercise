import React, { Component } from 'react';
import { auth } from './firebase-config';
import 'bulma/css/bulma.css' ;
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    isLoggedIn: false,
    email: '',
    uid: null,
  };

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

  render() {
    return (
      <div className="columns vh-100">
        <Sidebar logout={this.handleLogout} />
        <MainPanel logout={this.handleLogout} >
          <SignUpForm onSignUp={this.handleSignUp} />
          <LoginForm onLogin={this.handleLogin} />
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </MainPanel>
      </div>
    );
  }
}

export default App;