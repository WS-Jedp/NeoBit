import React from 'react';
import LabelCard from './LabelCard';
import { Link } from 'react-router-dom';


const Card = ({ astheroid }) => {
  let {
    id,
    name,
    is_potentially_hazardous_asteroid,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_max,
      }
    },
  } = astheroid;
  estimated_diameter_max = Number.parseFloat(estimated_diameter_max).toFixed(2);
  return (
    <div className="card">
      <div className="card-astheroid"></div>
      <h4>{name || 'Name of Asteroid'}</h4>
      <LabelCard title="Diametro maximo" description={estimated_diameter_max ? `${estimated_diameter_max} km` : '421.520 km'} />
      <LabelCard title="¿Es peligroso?" description={is_potentially_hazardous_asteroid ? 'Sí' : 'No'} />
      <Link to={`/astheroids/${id}`} className="button-secondaryGray">Ver más</Link>
    </div>
  );
};

export default Card;