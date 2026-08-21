import React from 'react';
import { Avatar } from 'antd';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">Users</div>
      <div className="header-profile">
        <Avatar size="large" style={{ backgroundColor: '#0052cc', verticalAlign: 'middle' }}>
          S
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
