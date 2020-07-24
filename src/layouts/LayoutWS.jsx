import React from 'react';
import { useLocation } from "react-router-dom";

// Components
import Header from '../components/organisms/Header';
import Footer from '../components/molecules/Footer';

const Layout = ({ children }) => {
  let location = useLocation();
  let dark = location.pathname !== '/' ? false : true;
  return (
    <div className="layoutWS">
      <Header dark={dark} />
      <section>
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;