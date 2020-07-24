import React from 'react';
import CardDetail from '../components/organisms/CardDetail';
import { astheroid } from '../components/manifests/astheroidManifest.json';

const AstheroidDetail = () => {
  return (
    <div className="astheroidDetail">
      <CardDetail astheroid={astheroid} />
    </div>
  );
};

export default AstheroidDetail;