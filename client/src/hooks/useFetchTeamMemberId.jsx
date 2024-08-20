import { useState, useEffect } from 'react';
import generateEndpoints from '../constants';

const useFetchTeamMemberId = (id) => {
  const [member, setMember] = useState(null);
  const [isMemberLoading, setIsMemberLoading] = useState(false);
  const [memberError, setMemberError] = useState(null);

  const apiUrl = generateEndpoints();

  useEffect(() => {
    const fetchMember = async () => {
      setIsMemberLoading(true);

      try {
        const response = await fetch(`${apiUrl}/api/team/getById/?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.error(`Encountered HTTP error: ${response.status}`);
        }

        const result = await response.json();
        setMember(result);
      } catch (error) {
        setMemberError(error);
      } finally {
        setIsMemberLoading(false);
      }
    };

    fetchMember();
  }, [id, apiUrl]);

  return { member, isMemberLoading, memberError };
};

export default useFetchTeamMemberId;
