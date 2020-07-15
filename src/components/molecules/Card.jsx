import React from 'react';
import LabelCard from './LabelCard';
import Button from '../atoms/Button';

const Card = ({ name, diameter, isHazardous }) => {
  return (
    <div className="card">
      <div className="card-astheroid"></div>
      <h4>{'Name of Asteroid' || name}</h4>
      <LabelCard title="Diametro" description={'some data' || diameter} />
      <LabelCard title="¿Es peligroso?" description={'some data' || isHazardous} />
      <a className="button-secondaryGray">Ver más</a>
    </div>
  );
};

export default Card;