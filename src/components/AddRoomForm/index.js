import React, { Component } from 'react';
import './styles.css';

class AddRoomForm extends Component {
  state = {
    email: '',
    password: '',
    roomName: '',
  }

  updateEmail = (e) => {
  };

  handleInputChange = (e) => {
    this.setState({
      roomName: e.target.value,
    });
  };

  handleAddRoom = (e) => {
    e.preventDefault();
    this.props.addRoom(this.state.roomName);
    this.setState({
      roomName: '',
    });
  }

  render() {  
    return (
      <form className="add-room-form" onSubmit={this.handleAddRoom}>
        <div className="control">
          <input type="text" 
            placeholder="Room Name..."
            onChange={(e) => this.handleInputChange(e)}
            className="input"
            value={this.state.roomName}
          />
        </div>
      </form>
    );
  }
}

export default AddRoomForm;