import React from 'react';

const Button = ({children, type, onClick, className}) => {

  return(
    <button type={type || 'button'} onClick={() => onClick()} className={className || 'button'}>
      {children}
    </button>
  );
}

export default Button;