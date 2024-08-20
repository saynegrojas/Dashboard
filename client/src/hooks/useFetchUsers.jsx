import { useState, useEffect } from 'react';
import generateEndpoints from '../constants';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = generateEndpoints();

  useEffect(() => {
    // Create a function to fetch user data
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Get a response from server
        const response = await fetch(`${apiUrl}/api/users/getAll`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Handle ok http error response
        if (!response.ok) {
          // OR throw an exception
          console.error(`Encountered HTTP error: ${response.status}`);
        }

        // Get the results from response
        const result = await response.json();

        // Store the result to a state
        setUsers(result);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchUsers();

    // return states
    return { users, loading, error };
  }, []);
};

export default useFetchUsers;
