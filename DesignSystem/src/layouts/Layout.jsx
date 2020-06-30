import React from 'react';
import SideBar from '../components/Molecules/SideBar';

// Styles
import '../styles/Layouts/LayoutsDS.scss';

const Layout = ({ children }) => {
  return (
    <div className="designSystem">
      <SideBar />
      <section className="designSystem--content">
        {children}
      </section>
    </div>
  );
};

export default Layout;