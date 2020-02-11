import React, { Component } from 'react';
import SignUpLoginWrapper from  './../SignUpLoginWrapper'
import './../../styles/sign-up.css'; 

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value,
    })
  };

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

  onSubmit = (e) => {
    e.preventDefault();
    const { onSignUp } = this.props;
    onSignUp(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    })
  }
  
  render() {  
    return (
      <SignUpLoginWrapper>
        <form action="" onSubmit={this.onSubmit}>
          <div className="field">
            <div className="control">
              <input
                className="input"
                value={this.state.name}
                type="text"
                placeholder="Name"
                onChange={this.updateName}
              />
            </div>
          </div>
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
          <button className="button is-fullwidth is-primary" type="submit">Sign Up</button>
          <a className="bottom-link has-text-centered" onClick={this.props.toggleLoginSignUp}>
            Already have an account? Log in!
          </a>
        </form>
      </SignUpLoginWrapper>
    );
  }
}

export default SignUpForm;