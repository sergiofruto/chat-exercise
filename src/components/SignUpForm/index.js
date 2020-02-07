import React, { Component } from 'react';

class index extends Component {
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

  onSubmit = (e) => {
    e.preventDefault();
    const { onSignUp } = this.props;
    onSignUp(this.state);
    this.setState({
      email: '',
      password: '',
    })
  }
  
  render() {  
    return (
      <div>
        <h1>Sign Up Form</h1>
        <form action="" onSubmit={this.onSubmit}>
          <input 
            value={this.state.email}
            type="text" 
            laceholder="Email"
            onChange={this.updateEmail}
          />
          <input
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={this.updatePassword}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default index;