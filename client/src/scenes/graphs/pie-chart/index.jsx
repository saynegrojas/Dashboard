import React from 'react';
import PieChart from '../../../components/PieChart';
import { Box } from '@mui/material';
import Header from '../../../components/Header';

const Pie = () => {
  return (
    <Box m='20px'>
      <Header
        title='Customer Satisfactory'
        subtitle='Measurement of customer satisfacotry for the current month'
        isGraph={true}
      />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
