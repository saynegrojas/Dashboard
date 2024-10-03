import React from 'react';
import { Box } from '@mui/material';
import Header from '../../../components/Header';
import BarChart from '../../../components/BarChart';

const Bar = () => {
  return (
    <Box m='20px'>
      <Header
        title='Call Transfer Quantity'
        subtitle='Track different types of transfer metrics for the current month'
      />
      <Box height='75vh'>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
