import React from 'react';

const MainPanel = ({ children, logout }) => {
  return (
    <div className="column hero">
      <div className="hero-body">
        <div className="columns is-centered">
          <div className="column is-half">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;

