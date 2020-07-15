import React from 'react';
import CardInfo from '../molecules/CardInfo';
import LabelCard from '../molecules/LabelCard';
import Button from '../atoms/Button';

const CardDetail = ({ ashteroid }) => {
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
    close_approach_data: [
      {
        epoch_date_close_approach,
        relative_velocity: {
          kilometers_per_hour: relative_velocity
        },
        miss_distance: {
          kilometers: miss_distance
        }
      }
    ],
  } = ashteroid;
  estimated_diameter_max = estimated_diameter_max.toFixed(2);
  estimated_diameter_min = estimated_diameter_min.toFixed(2);
  miss_distance = Number.parseFloat(miss_distance).toFixed(2);
  relative_velocity = Number.parseFloat(relative_velocity).toFixed(2);
  return (
    <div className="cardDetail">
      <h1>{name || 'Name Of Asteroid'}</h1>
      <div className="astheroid-container">
        <div className="cardDetail-astheroid"></div>
      </div>
      <div className="info-container">
        <CardInfo title="Information" />
        <div>
          <LabelCard title="¿Es peligroso?" description={is_potentially_hazardous_asteroid ? 'Sí' : 'No'} />
          <LabelCard title="Diametro Estimado Min" description={estimated_diameter_min ? `${estimated_diameter_min} km` : '421.520 km'} />
          <LabelCard title="Diametro Estimado Max" description={estimated_diameter_max ? `${estimated_diameter_max} km` : '421.520 km'} />
        </div>
        <a className="button-primaryWhite">Regresar</a>
      </div>
      <div className="info-container-bottom">
        <LabelCard title="Distancia maxima" description={miss_distance ? `${miss_distance} km` : '421.520 km'} />
        <LabelCard title="Velocidad Relativa" description={relative_velocity ? `${relative_velocity} km/h` : '421.520 km/h'} />
        <LabelCard title="Magnitud Absoluta H" description={absolute_magnitude_h ? `${absolute_magnitude_h}` : '21.520'} />
      </div>
    </div>
  );
};

export default CardDetail;