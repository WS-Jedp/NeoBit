import React from 'react';
import { FaGithub, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-social">
      <p>Copyrigth © By Platzi Master</p>
      <div className="social">
        <a target="_blank" href="https://github.com/WS-Jedp/NeoBit">
          <FaGithub />
        </a>
        <a href="">
          <FaInstagramSquare />
        </a>
        <a href="">
          <FaTwitterSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;