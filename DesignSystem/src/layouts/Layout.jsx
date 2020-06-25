import React from 'react';
import SideBar from '../components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;