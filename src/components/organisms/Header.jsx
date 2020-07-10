import React from 'react';
import logoWhite from '../../images/logoWhite.svg'
import logoBlack from '../../images/logoBlack.svg'
import Menu from '../molecules/Menu';

const Header = ({ dark }) => {
  return (
    <header>
      <img src={(dark && logoBlack) || logoWhite} alt=""/>
      <Menu dark={dark} />
    </header>
  );
};

export default Header;