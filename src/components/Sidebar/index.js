import React from 'react';
import RoomList from './../RoomList';

const SideBar = ({ logout, rooms, selectedRoom, setRoom, addRoom }) => {
  return (
    <aside>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://lever-client-logos.s3.amazonaws.com/fae1a084-c900-4fbe-9706-2620e45a2814-1575406000855.png" alt="demo chat app" width="112" height="28" />
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <button className="button top-right-button" onClick={logout}>Log Out</button>
        </div>
      </nav>
      <RoomList
        rooms={rooms}
        selectedRoom={selectedRoom}
        setRoom={setRoom}
        addRoom={addRoom}
      />
    </aside>
  );
};

export default SideBar;

