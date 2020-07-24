import React from 'react';

import Loading from '../components/molecules/Loading';
import Footer from '../components/molecules/Footer';
import CurosityFacts from '../components/molecules/CuriosityFacts';
import CardList from '../components/organisms/CardList';

import { astheroids } from '../components/manifests/cardListManifest.json';

const ashteroids = () => {
  return (
    <div className="astheroids">
      <CurosityFacts title="Asteroides" />
      <CardList astheroids={astheroids} />
      {/* <Loading /> */}
    </div>
  );
};

export default ashteroids;