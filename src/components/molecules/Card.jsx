import React from 'react';
import LabelCard from './LabelCard';
import Button from '../atoms/Button';


const Card = ({ astheroid }) => {
  return (
    <div className="card">
      <div className="card-astheroid"></div>
      <h4>{'Name of Asteroid'}</h4>
      <LabelCard title="Diametro" description={'some data'} />
      <LabelCard title="¿Es peligroso?" description={'some data'} />
      <a className="button-secondaryGray">Ver más</a>
    </div>
  );
};

export default Card;