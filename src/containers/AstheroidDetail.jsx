import React, { useEffect, useState } from 'react';
import CardDetail from '../components/organisms/CardDetail';
import Loading from '../components/molecules/Loading';

const AstheroidDetail = ({ match }) => {
  const { params: {
      id
    }
  } = match
  const [astheroid, setAstheroid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=fHx9cvmiysauYUTxHVAdOARJAnxSwvZNz60nOqvm`);
      const body = await response.json();
      console.log(body)
      setAstheroid(body);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="astheroidDetail">
      {
        loading ? <Loading /> : <CardDetail astheroid={astheroid} />
      }
    </div>
  );
};

export default AstheroidDetail;