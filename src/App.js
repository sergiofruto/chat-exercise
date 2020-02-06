import React, { Component } from 'react';
import firebaseApp from './firebase-config';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const auth = firebaseApp.auth();

auth.createUserWithEmailAndPassword('j@j.com', '123456')
    .then(response => console.log('Response', response))
    .catch(err => console.log(err));

class App extends Component {
  state = {
    isLoggedIn: false,
    email: '',
    hasSignedUp: false,
  };

  handleSignUp = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      hasSignedUp: !prevState.hasSignedUp,
    }));
    console.log(this.state.hasSignedUp);
  }

  handleLogin = (email) => {
    this.setState({
      isLoggedIn: true,
      email: email,
    })
    console.log('Login', this.state);
  }

  render() {
    return (
      <div className="App">
        <SignUpForm onSignUp={this.handleSignUp} />
        <LoginForm onLogin={this.handleLogin} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;