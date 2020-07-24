import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

// images
import logoWhite from '../../../images/logoWhite.svg'
import logoBlack from '../../../images/logoBlack.svg'

// Components
import Menu from '../molecules/Menu';

const Header = ({ dark }) => {
  const headerClass = classNames({
    header: true,
    'header-dark': dark
  });
  return (
    <header className={headerClass}>
      <Link to="/"><img src={(dark && logoWhite) || logoBlack} alt="Neobit Logo" /></Link>
      <Menu dark={dark} />
    </header>
  );
};

export default Header;