import React from 'react';

// Components
import SideBar from '../components/molecules/SideBar';
import Header from '../components/organisms/Header';

const Layout = ({ children, component: Component }) => {
  return (
    <div className="">
      <Header dark />
      <section className="">
        {children}
      </section>
    </div>
  );
};

export default Layout;