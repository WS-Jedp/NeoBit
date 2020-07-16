import React from 'react';
import LabelCard from './LabelCard';
import Button from '../atoms/Button';

const Card = ({ astheroid }) => {
  
  return (
    <div className="card">
      <div className="card-astheroid"></div>
      <h4>Name of Asteroid</h4>
      <LabelCard title="label" description="some data" />
      <LabelCard title="label" description="some data" />
      <Button className="button-secondaryGray">Type me</Button>
    </div>
  );
};

export default Card;