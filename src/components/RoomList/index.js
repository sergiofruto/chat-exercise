import React from 'react';
import AddRoomForm from './../AddRoomForm';
import './styles.css';
import placeholder from './../../assets/img/avatar-placeholder.png';

const Room = ({ room, selectedRoom, setRoom }) => {
  const styles = selectedRoom === room.id ? 'room-active': 'room';
  return (
    <li className={`room-item ${styles}`}  key={room.id}>
      <div className="inner-item" onClick={() => setRoom(room.id)}>
        <img src={placeholder} alt=""/>
        <span>{room.name}</span>
      </div>
    </li>
  );
}

const RoomList = ({ rooms, selectedRoom, setRoom, addRoom }) => {
  const roomComponents = Object.keys(rooms).map(roomKey => ({
    ...rooms[roomKey],
    id: roomKey
  }))

  return (
    <div>
      <ul className="room-list">
        {roomComponents.map(roomObj => (
          <Room
            key={roomObj.id}
            room={roomObj}
            selectedRoom={selectedRoom}
            setRoom={setRoom}
          />
        ))}
      </ul>
      <div className="">
        <AddRoomForm addRoom={addRoom} />
      </div>
    </div>
  );
};

export default RoomList;