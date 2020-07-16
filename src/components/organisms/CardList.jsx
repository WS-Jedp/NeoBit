import React from 'react';
import Card from '../molecules/Card';

const CardList = ({ astheroids }) => {

  return (
    <section className="cardList">
      {
        astheroids.map((astheroid, index) => <Card astheroid={astheroid} key={index} />)
      }
    </section>
  );
}

export default CardList;
