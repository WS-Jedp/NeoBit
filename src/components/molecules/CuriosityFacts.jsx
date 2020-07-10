import React from 'react';

const CurosityFacts = ({ title, description }) => {
  return (
    <div className="curiosityFacts">
      <h1>{title || "Titulo"}</h1>
      <p>{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore delectus libero repellendus cumque, ipsam incidunt animi quam impedit id possimus pariatur, et officiis labore non distinctio rem, magnam doloremque?"}</p>
    </div>
  );
};

export default CurosityFacts;