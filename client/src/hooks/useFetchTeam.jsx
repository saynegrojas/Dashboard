import { useEffect, useState } from 'react';
import generateEndpoints from '../constants';
import axios from 'axios';

const useFetchTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = generateEndpoints();

  useEffect(() => {
    const fetchTeam = async () => {
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
  }, [apiUrl]);
  return { team, loading, error, setTeam };
};

export default useFetchTeam;
