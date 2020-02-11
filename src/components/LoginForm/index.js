import React, { Component } from 'react';
import SignUpLoginWrapper from './../SignUpLoginWrapper'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  updateEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  };

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  };

  login = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    })
  }

  render() {  
    return (
      <SignUpLoginWrapper>
        <form action="" onSubmit={this.login}>
          <div className="field">
            <div className="control">
              <input 
                className="input"
                value={this.state.email}
                type="text" 
                placeholder="Email"
                onChange={this.updateEmail}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                className="input"
                value={this.state.password}
                type="password"
                placeholder="Password"
                onChange={this.updatePassword}
              />
            </div>
          </div>
          <button className="button is-primary is-fullwidth" type="submit">Login</button>
          <a className="bottom-link has-text-centered" onClick={this.props.toggleLoginSignUp}>
            Don't have an account? Sign up!
          </a>
        </form>
      </SignUpLoginWrapper>
    );
  }
}

export default LoginForm;