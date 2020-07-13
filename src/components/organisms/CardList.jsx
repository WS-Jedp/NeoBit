import React from 'react';

const CardList = ({children}) => {

  return (
    <section className="cardList">
      {
        children
      }
    </section>
  );
}

export default CardList;
