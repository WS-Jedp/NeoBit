import React from 'react';
import CardInfo from '../molecules/CardInfo';
import LabelCard from '../molecules/LabelCard';
import { Link } from 'react-router-dom';

const CardDetail = ({ astheroid }) => {
  let {
    name,
    absolute_magnitude_h,
    estimated_diameter: {
      meters: {
        estimated_diameter_min,
        estimated_diameter_max,
      }
    },
    is_potentially_hazardous_asteroid,
    orbital_data: {
      first_observation_date,
      last_observation_date,
    }
  } = astheroid;
  estimated_diameter_max = estimated_diameter_max.toFixed(2);
  estimated_diameter_min = estimated_diameter_min.toFixed(2);
  // miss_distance = Number.parseFloat(miss_distance).toFixed(2);
  // relative_velocity = Number.parseFloat(relative_velocity).toFixed(2);
  return (
    <div className="cardDetail">
      <h1>{name || 'Name Of Asteroid'}</h1>
      <div className="astheroid-container">
        <div className="cardDetail-astheroid"></div>
      </div>
      <div className="info-container">
        <CardInfo title="Información" description={`El asteroide ${name}, es uno de los asteroides que orbita nuestro sistema solar. Por lo cual ${is_potentially_hazardous_asteroid ? '' : 'no'} lo hace peligroso de este asteroide para un impacto con el planeta tierra.`} />
        <div>
          <LabelCard title="¿Es peligroso?" description={is_potentially_hazardous_asteroid ? 'Sí' : 'No'} />
          <LabelCard title="Diametro Estimado Min" description={estimated_diameter_min ? `${estimated_diameter_min} km` : '421.520 km'} />
          <LabelCard title="Diametro Estimado Max" description={estimated_diameter_max ? `${estimated_diameter_max} km` : '421.520 km'} />
        </div>
        <Link to="/astheroids" className="button-primaryWhite">Regresar</Link>
      </div>
      <div className="info-container-bottom">
        <LabelCard title="Primera Observación" description={first_observation_date ? `${first_observation_date}` : 'No hay registro'} />
        <LabelCard title="Última Observación" description={last_observation_date ? `${last_observation_date}` : 'No hay registro'} />
        <LabelCard title="Magnitud Absoluta H" description={absolute_magnitude_h ? `${absolute_magnitude_h}` : '21.520'} />
      </div>
    </div>
  );
};

export default CardDetail;