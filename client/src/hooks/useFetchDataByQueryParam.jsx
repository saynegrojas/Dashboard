import { useState, useCallback } from 'react';
import generateEndpoints from '../constants';

const useFetchDataByQueryParam = (endPoint) => {
  const [queryData, setQueryData] = useState(null);
  const [isQueryLoading, setIsQueryLoading] = useState(false);
  const [queryError, setQueryError] = useState(null);

  const apiUrl = generateEndpoints();

  const fetchQueryData = useCallback(
    async (queryParam) => {
      setIsQueryLoading(true);

      try {
        const response = await fetch(`${apiUrl}${endPoint}${queryParam}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error(`Encountered HTTP error: ${response.status}`);
        }

        const result = await response.json();
        setQueryData(result);
      } catch (error) {
        setQueryError(error);
      } finally {
        setIsQueryLoading(false);
      }
    },
    [apiUrl, endPoint],
  );

  fetchQueryData();

  return { queryData, isQueryLoading, queryError, fetchQueryData };
};

export default useFetchDataByQueryParam;
