import React from 'react';
import { FaGithub, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-social">
      <p>Copyrigth © By Platzi Master</p>
      <div className="social">
        <FaGithub />
        <FaInstagramSquare />
        <FaTwitterSquare />
      </div>
    </footer>
  );
};

export default Footer;