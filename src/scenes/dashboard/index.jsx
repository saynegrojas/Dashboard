import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb='20px'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>
    </Box>
  );
};

export default Dashboard;
