import React from 'react';
import logo404 from '../../images/404.png'
import logoNotFound from '../../images/notFound.svg'

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>¡Traiganlo de vuelta!</h2>
      <img id="notFound" src={logoNotFound} alt=""/>
      <img id="fourHoundred" src={logo404} alt=""/>
    </div>
  );
};

export default NotFound;