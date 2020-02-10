import React from 'react';
import RoomList from './../RoomList';

const index = ({ logout, rooms, selectedRoom, setRoom, addRoom }) => {
  return (
    <div className="column is-3 hero is-primary">
      <RoomList
        rooms={rooms}
        selectedRoom={selectedRoom}
        setRoom={setRoom}
        addRoom={addRoom}
      />
      <div className="control">
        <button className="button is-fullwidth" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
};

export default index;

