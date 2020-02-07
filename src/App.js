import React, { Component } from 'react';
import { auth } from './firebase-config';
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
      <div className="App">
        <SignUpForm onSignUp={this.handleSignUp} />
        <LoginForm onLogin={this.handleLogin} />
        <button onClick={this.handleLogout}>Log Out</button>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.state.isLoggedIn ? <p>You are logged in </p> : ''}
      </div>
    );
  }
}

export default App;