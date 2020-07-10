import React from 'react';

const CardInfo = ({ title, description }) => {
  return (
    <div className="cardInfo">
      <h2>{title || "Titulo"}</h2>
      <p>{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore delectus libero repellendus cumque, ipsam incidunt animi quam impedit id possimus pariatur, et officiis labore non distinctio rem, magnam doloremque?"}</p>
    </div>
  );
};

export default CardInfo;