import { useEffect, useState } from 'react';

const useFetchUser = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12&nat=us');
        const data = await response.json();
        setUserData(data?.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // return <div>{userData ? <pre>{JSON.stringify(userData, null, 2)}</pre> : <p>Loading...</p>}</div>;
  return { userData, loading, error, setUserData };
};

export default useFetchUser;
