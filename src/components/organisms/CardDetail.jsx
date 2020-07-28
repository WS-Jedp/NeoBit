import React from 'react';
import CardInfo from '../molecules/CardInfo';
import LabelCard from '../molecules/LabelCard';
import { Link } from 'react-router-dom';
import astheroid1 from '../../../images/astheroid1.svg';
import astheroid2 from '../../../images/astheroid2.svg';
import astheroid3 from '../../../images/astheroid3.svg';

const CardDetail = ({ astheroid }) => {
  let {
    name,
    absolute_magnitude_h,
    estimated_diameter: {
      kilometers: {
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
  const images = [
    astheroid1,
    astheroid2
  ];
  estimated_diameter_max = estimated_diameter_max.toFixed(2);
  estimated_diameter_min = estimated_diameter_min.toFixed(2);

  const getRandomAstheroid = images => images[Math.floor(Math.random() * 2)];
  const randomImage = getRandomAstheroid(images);

  return (
    <div className="cardDetail">
      <h1>{name || 'Name Of Asteroid'}</h1>
      <div className="astheroid-container">
        <img src={is_potentially_hazardous_asteroid ? astheroid3 : randomImage} alt="Astheroid" />
      </div>
      <div className="info-container">
        <CardInfo title="Información" description={`El asteroide ${name}, es uno de los asteroides que orbita nuestro sistema solar. Por lo cual ${is_potentially_hazardous_asteroid ? '' : 'no'} lo hace de este asteroide peligroso para un impacto con el planeta tierra.`} />
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