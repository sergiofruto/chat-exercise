import React, { Component } from 'react';
import { InputStyled } from './styled';

class SendMessageForm extends Component {
  state = {
    text: '',
  }

  onMessageSend = (e) => {
    e.preventDefault();
    if(this.state.text) {
      const message = {
        created: Date.now(),
        text: this.state.text,
        author: this.props.email,
        roomId: this.props.roomId,
      }
  
      this.props.sendMessage(message);
      this.setState({text: ''});
    }
  }

  onInputTyping = (e) => {
    this.setState({
      text: e.target.value,
    });
    this.props.handleIsTyping(this.state.text);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onMessageSend} action="">
          <InputStyled
            type="text"
            placeholder="write something"
            value={this.state.text}
            onChange={this.onInputTyping}
          />
        </form>
      </div>
    );
  }
}

export default SendMessageForm;
