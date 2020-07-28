import React, { useEffect, useState, useRef } from 'react';

import Loading from '../components/molecules/Loading';
import CurosityFacts from '../components/molecules/CuriosityFacts';
import CardList from '../components/organisms/CardList';

const ashteroids = () => {
  const [astheroids, setAstheroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [skip, setSkip] = useState(0);
  const stateAstheroidsRef = useRef();
  const stateSkipRef = useRef();
  stateAstheroidsRef.current = astheroids;
  stateSkipRef.current = skip;
  
  const options = {
    rootMargin: '0px 0px 0px 500px'
  }
  const handleIntersection = (entries, observer) => {
    entries.forEach(async entry => {
      if (entry.isIntersecting) {
        setSkip(stateSkipRef.current + 10);
        const response = await fetch('http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `{
              getNeos(first: 10, skip: ${stateSkipRef.current}) {
                _id,
                name,
                image,
                is_potentially_hazardous_asteroid,
                absolute_magnitude_h,
                estimated_diameter {
                  kilometers {
                    estimated_diameter_min,
                    estimated_diameter_max
                  }
                },
                orbital_data {
                  first_observation_date,
                  last_observation_date
                }
              }
            }`
          })
        });
        const body = await response.json();
        
        setAstheroids(stateAstheroidsRef.current.concat(body.data.getNeos));
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
      const response = await fetch('http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query: `{
              getNeos(first: 10, skip: 0) {
                _id,
                name,
                image,
                is_potentially_hazardous_asteroid,
                absolute_magnitude_h,
                estimated_diameter {
                  kilometers {
                    estimated_diameter_min,
                    estimated_diameter_max
                  }
                },
                orbital_data {
                  first_observation_date,
                  last_observation_date
                }
              }
            }`
        })
      });
      setLoading(false);
      const body = await response.json();
      setAstheroids(body.data.getNeos);
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