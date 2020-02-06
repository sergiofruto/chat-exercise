import React, { Component } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

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