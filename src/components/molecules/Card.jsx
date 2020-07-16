import React from 'react';
import LabelCard from './LabelCard';
import Button from '../atoms/Button';


const Card = ({ astheroid }) => {
  let {
    name,
    is_potentially_hazardous_asteroid,
    close_approach_data: [
      {
        miss_distance: {
          kilometers: miss_distance
        }
      }
    ],
  } = astheroid;
  miss_distance = Number.parseFloat(miss_distance).toFixed(2);
  return (
    <div className="card">
      <div className="card-astheroid"></div>
      <h4>{name || 'Name of Asteroid'}</h4>
      <LabelCard title="Distancia maxima" description={miss_distance ? `${miss_distance} km` : '421.520 km'} />
      <LabelCard title="¿Es peligroso?" description={is_potentially_hazardous_asteroid ? 'Sí' : 'No'} />
      <a className="button-secondaryGray">Ver más</a>
    </div>
  );
};

export default Card;