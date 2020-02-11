import React from 'react';
import './styles.css'; 

const MainPanel = ({ children, logout }) => {
  return (
    <div className="outer-wrapper">
      <div className="main-grid">
        {children}
      </div>
    </div>
  );
};

export default MainPanel;

