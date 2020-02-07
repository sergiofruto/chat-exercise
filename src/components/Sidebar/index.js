import React from 'react';

const index = ({ logout }) => {
  return (
    <div className="column is-3 hero is-primary">
      <h1 className="subtitle">Chat App</h1>
      <div className="control">
        <button className="button is-fullwidth" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
};

export default index;

