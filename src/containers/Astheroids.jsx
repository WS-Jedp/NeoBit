import React, { useEffect, useState } from 'react';

import Loading from '../components/molecules/Loading';
import CurosityFacts from '../components/molecules/CuriosityFacts';
import CardList from '../components/organisms/CardList';

// import { astheroids } from '../components/manifests/cardListManifest.json';

const ashteroids = () => {
  const [astheroids, setAstheroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const options = {
    root: document.querySelector('.cardList')
  }

  let observer = new IntersectionObserver(callback, options);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=fHx9cvmiysauYUTxHVAdOARJAnxSwvZNz60nOqvm");
      setLoading(false);
      const body = await response.json();
      setAstheroids(body.near_earth_objects);
    };
    getData();
  }, []);
  return (
    <div className="astheroids">
      <CurosityFacts title="Asteroides" />
      {
        loading ? <Loading /> : <CardList astheroids={astheroids} />
      }
    </div>
  );
};

export default ashteroids;