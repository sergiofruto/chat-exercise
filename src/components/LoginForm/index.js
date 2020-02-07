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
      <div className="box">
        <h1 className="title">Login Form</h1>
        <form action="" onSubmit={this.login}>
          <div className="field">
            <div className="control">
              <input 
                className="input"
                value={this.state.email}
                type="text" 
                laceholder="Email"
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
        </form>
      </div>
    );
  }
}

export default index;