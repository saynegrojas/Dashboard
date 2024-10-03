import React from 'react';
import { Box } from '@mui/material';
import Header from '../../../components/Header';
import LineChart from '../../../components/LineChart';

const Line = () => {
  return (
    <Box m='20px'>
      <Header
        title='Current Calls'
        subtitle='This dataset shows the relationship between the number of answered calls, abandoned calls, answered rate, service level, and the incoming calls, which helps to assess the call handling efficiency for each day'
        isGraph={true}
      />
      <Box height='75vh'>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
