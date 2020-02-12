import React, { useState } from 'react';
import RoomList from './../RoomList';
import './styles.css';

const SideBar = ({ toggleMenu, menuOpen, logout, rooms, selectedRoom, setRoom, addRoom }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <aside>
      <nav className="navbar rooms-header" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://lever-client-logos.s3.amazonaws.com/fae1a084-c900-4fbe-9706-2620e45a2814-1575406000855.png" alt="demo chat app" width="112" height="28" />
          </a>
          <span onClick={() => setIsMenuOpen(!isMenuOpen)} role="button" className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <button className="button is-small is-white top-right-button" onClick={logout}>Log Out</button>
        </div>
      </nav>
      <RoomList
        rooms={rooms}
        selectedRoom={selectedRoom}
        setRoom={setRoom}
        addRoom={addRoom}
      />
      <div className="desktop-logout-cta">
        <button className="button is-white is-fullwidth is-white top-right-button" onClick={logout}>Log Out</button>
      </div>
    </aside>
  );
};

export default SideBar;

