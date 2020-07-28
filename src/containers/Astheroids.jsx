import React, { useEffect, useState, useRef } from 'react';

import Loading from '../components/molecules/Loading';
import CurosityFacts from '../components/molecules/CuriosityFacts';
import CardList from '../components/organisms/CardList';

const ashteroids = () => {
  const [astheroids, setAstheroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const stateAstheroidsRef = useRef();
  const statePageRef = useRef();
  stateAstheroidsRef.current = astheroids;
  statePageRef.current = page;
  
  const options = {
    rootMargin: '0px 0px 0px 500px'
  }
  const handleIntersection = (entries, observer) => {
    entries.forEach(async entry => {
      if (entry.isIntersecting) {
        setPage(statePageRef.current + 1);
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?page=${statePageRef.current + 1}&size=10&api_key=fHx9cvmiysauYUTxHVAdOARJAnxSwvZNz60nOqvm`);
        const body = await response.json();
        
        setAstheroids(stateAstheroidsRef.current.concat(body.near_earth_objects));
        observer.unobserve(entry.target);
        const cards = document.querySelectorAll('.card');
        const lastCard = cards[cards.length - 2];
        observer.observe(lastCard);
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection, options);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=10&api_key=fHx9cvmiysauYUTxHVAdOARJAnxSwvZNz60nOqvm");
      setLoading(false);
      const body = await response.json();
      setAstheroids(body.near_earth_objects);
      const cards = document.querySelectorAll('.card');
      const lastCard = cards[cards.length - 2];
      observer.observe(lastCard);
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