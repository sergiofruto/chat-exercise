import React from 'react';

const Room = ({ room, selectedRoom, setRoom }) => {
  const styles = selectedRoom === room.id ? 'room-active': 'room';
  return (
    <li className={styles}  key={room.id}>
      <a onClick={() => setRoom(room.id)}>
        {room.title}
      </a>
    </li>
  );
}

const RoomList = ({ rooms, selectedRoom, setRoom }) => {
  const roomComponents = Object.keys(rooms).map(roomKey => ({
    ...rooms[roomKey],
    id: roomKey
  }))

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
      </aside>
    </div>
  );
};

export default RoomList;