import { useEffect, useState } from 'react';
import generateEndpoints from '../constants';
import axios from 'axios';

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = generateEndpoints();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}${endpoint}`);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, endpoint]);
  return { data, loading, error, setData };
};

export default useFetchData;
