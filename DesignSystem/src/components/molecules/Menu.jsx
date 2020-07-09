import React from 'react';
import classNames from 'classnames';


const Menu = ({dark}) => {
  const menuClass = classNames({
    menu: true,
    'menu-dark': dark
  });
  return (
    <ul className={menuClass}>
      <li><a>Home</a></li>
      <li><a>Discover</a></li>
      <li><a>Blog</a></li>
    </ul>
  );
};

export default Menu;