import React from 'react';
import AddRoomForm from './../AddRoomForm';

const Room = ({ room, selectedRoom, setRoom }) => {
  const styles = selectedRoom === room.id ? 'room-active': 'room';
  return (
    <li className={styles}  key={room.id}>
      <a onClick={() => setRoom(room.id)}>
        {room.name}
      </a>
    </li>
  );
}

const RoomList = ({ rooms, selectedRoom, setRoom, addRoom }) => {
  const roomComponents = Object.keys(rooms).map(roomKey => ({
    ...rooms[roomKey],
    id: roomKey
  }))
  // console.log('proccess', roomComponents);

  return (
    <div>
      <aside className="menu">
        <h1 className="title">Rooms</h1>
        <ul className="menu-list">
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
      </aside>
    </div>
  );
};

export default RoomList;