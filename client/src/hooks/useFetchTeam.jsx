import { useEffect, useState } from 'react';
import axios from 'axios';
import generateEndpoints from '../constants';

const useFetchTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = generateEndpoints();

  useEffect(() => {
    const fetchTeam = async () => {
      // TODO: Use makeRequest function
      try {
        const response = await axios.get(`${apiUrl}/api/team/getAll`);
        setTeam(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);
  return { team, loading, error };
};

export default useFetchTeam;
