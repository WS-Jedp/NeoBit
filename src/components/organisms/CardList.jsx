import React from 'react';
import Card from '../molecules/Card';

const CardList = ({ astheroids }) => {

  return (
    <section className="cardList">
      {
        astheroids.map((astheroid) => <Card astheroid={astheroid} key={astheroid._id} />)
      }
    </section>
  );
}

export default CardList;
