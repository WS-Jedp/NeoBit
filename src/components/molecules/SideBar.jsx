import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../../images/logoDS.svg'

const SideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/ds"><img src={logo} alt="" /></Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/ds/atoms" activeClassName="selected">
              Atomos
            </NavLink>
          </li>
          <li>
            <NavLink to="/ds/molecules" activeClassName="selected">
              Moléculas
            </NavLink>
          </li>
          <li>
            <NavLink to="/ds/organisms" activeClassName="selected">
              Organismos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;