import React from 'react';
import { texts } from '../manifests/curiosityFactsManifest.json';

const useRandom = textArray => {
  const randomNumber = Math.floor(Math.random() * textArray.length);
  return textArray[randomNumber];
}

const CurosityFacts = ({ title }) => {
  const text = useRandom(texts);
  return (
    <div className="curiosityFacts">
      <h1>{title || "Titulo"}</h1>
      <p>{text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore delectus libero repellendus cumque, ipsam incidunt animi quam impedit id possimus pariatur, et officiis labore non distinctio rem, magnam doloremque?"}</p>
    </div>
  );
};

export default CurosityFacts;