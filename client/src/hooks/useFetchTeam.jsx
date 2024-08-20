import { useEffect, useState } from 'react';
import generateEndpoints from '../constants';

const useFetchTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = generateEndpoints();

  // useEffect(() => {
  //   const fetchTeam = async () => {

  //     // TODO: Use makeRequest function
  //     try {
  //       const response = await axios.get(`${apiUrl}/api/team/getAll`);
  //       setTeam(response.data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchTeam();
  // }, []);
  // return { team, loading, error };

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        // First get a response
        const response = await fetch(`${apiUrl}/api/team/getAll`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Handle HTTP error response
        if (!response.ok) {
          // or throw error -- stop app process
          console.error(`Encountered HTTP error: ${response.status}`);
        }
        // Parse response data
        const result = await response.json();
        // store results to state
        setTeam(result);
      } catch (error) {
        // Catch error
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // call the function
    fetchTeam();
  }, [apiUrl]);

  return { team, loading, error, setTeam };
};

export default useFetchTeam;
