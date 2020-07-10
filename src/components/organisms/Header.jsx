import React from 'react';
import classNames from 'classnames';

// images
import logoWhite from '../../images/logoWhite.svg'
import logoBlack from '../../images/logoBlack.svg'

// Components
import Menu from '../molecules/Menu';

const Header = ({ dark }) => {
  const headerClass = classNames({
    header: true,
    'header-dark': dark
  });
  return (
    <header className={headerClass}>
      <a href=""><img src={(dark && logoWhite) || logoBlack} alt="Neobit Logo" /></a>
      <Menu dark={dark} />
    </header>
  );
};

export default Header;