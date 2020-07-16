import React from 'react';

const CardInfo = ({ title, description }) => {
  return (
    <div className="cardInfo">
      <h2>{title || "Titulo"}</h2>
      <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nisl non quam congue lacinia. Nullam ornare mi eu elit ultricies dapibus. Aenean congue sollicitudin ante at imperdiet. Nam ac sapien et ipsum sodales porta in id sapien. Phasellus eu nulla magna. Quisque orci ex, gravida quis rutrum nec."}</p>
    </div>
  );
};

export default CardInfo;