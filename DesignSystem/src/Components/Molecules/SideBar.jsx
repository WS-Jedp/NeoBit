import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.svg'

const SideBar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/atoms" activeClassName="selected">
              Atomos
            </NavLink>
          </li>
          <li>
            <NavLink to="/molecules" activeClassName="selected">
              Moléculas
            </NavLink>
          </li>
          <li>
            <NavLink to="/organisms" activeClassName="selected">
              Organismos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;