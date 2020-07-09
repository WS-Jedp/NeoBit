import React from 'react';

const Button = ({title, type, onClick, style}) => {

  return(
    <button type={type || 'button'} onClick={() => onClick()} className={style}>
      {title}
    </button>
  );
}

export default Button;