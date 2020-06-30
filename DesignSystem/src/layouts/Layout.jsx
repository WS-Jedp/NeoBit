import React from 'react';
import SideBar from '../components/SideBar';

// Styles
import '../styles/Layouts/LayoutsDS.scss';

const Layout = ({ children }) => {
  return (
    <div className="designSystem">
      <SideBar />
      <section className="designSystem__content">
        {children}
      </section>
    </div>
  );
};

export default Layout;