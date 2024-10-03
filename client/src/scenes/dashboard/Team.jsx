import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography, useTheme } from '@mui/material';
import { callHandlingData } from '../../data/mockData';
import { tokens } from '../../theme';

const columns = [
  { id: 'employee', label: 'Employee', span: 'span 4' },
  { id: 'answered_calls', label: 'Answered', span: 'span 2' },
  {
    id: 'incoming_calls',
    label: 'Incoming',
    span: 'span 2',
  },
  {
    id: 'abandoned_calls',
    label: 'Abandoned',
    span: 'span 2',
  },
  {
    id: 'answer_rate',
    label: 'Answer Rate',
    span: 'span 2',
  },
];

const Team = ({ userData }) => {
  console.log('TEAM', userData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [updatedUserData, setUpdatedUserData] = useState([]);

  useEffect(() => {
    if (userData?.length > 0) {
      const updateUser = userData?.map((user, index) => {
        console.log(user, index, callHandlingData);
        const newItem = {
          ...user,
          employee: `${user.name}`,
          incoming_calls: callHandlingData[0]?.data[index].y,
          answered_calls: callHandlingData[1]?.data[index].y,
          abandoned_calls: callHandlingData[2]?.data[index].y,
          answer_rate: callHandlingData[3]?.data[index].y,
        };
        return newItem;
      });

      setUpdatedUserData(updateUser);
    }
  }, [userData]);

  console.log('updatedUserData', updatedUserData);
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      p='8px'
      borderBottom={`4px solid ${colors.primary[500]}`}
    >
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='200px' gap='80px'>
        {columns.map((col, colIdx) => (
          <Box
            gridColumn={col.id !== 'employee' ? 'span 2' : 'span 4'}
            gridRow='span 2'
            backgroundColor={colors.primary[400]}
            overflow='auto'
            py={2}
          >
            <Typography color={colors.greenAccent[500]}>{col.label}</Typography>
            {updatedUserData.map((user, idx) =>
              col.id !== 'employee' ? (
                <Box display='flex' alignItems='center' key={user.id} padding='5px 0'>
                  <Typography>{user[col.id]}</Typography>
                </Box>
              ) : (
                <Box key={user.id} display='flex' alignItems='center' padding='3px 0'>
                  {/* ID */}
                  <Typography mr={2} style={{ width: '10px', textAlign: 'center' }}>
                    {user.id}
                  </Typography>
                  {/* Avatar */}
                  <Avatar
                    sx={{ width: 26, height: 26, marginRight: '8px' }}
                    src={user.profile_img}
                  />
                  {/* Name */}
                  <Typography>{user.name}</Typography>
                </Box>
              ),
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
