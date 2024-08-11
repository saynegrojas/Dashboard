import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import Header from '../../components/Header';
import ProgressCircle from '../../components/ProgressCircle';
import StatBoxColumn from '../../components/StatBoxColumn';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDashboard = true;

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} /> Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid / Charts */}
      <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gridAutoRows='140px' gap='20px'>
        {/* First Row */}
        <StatBoxColumn
          title='12,361'
          subtitle='Email Sent'
          progress='0.75'
          increase='+15%'
          iconName='EmailIcon'
        />
        <StatBoxColumn
          title='431,361'
          subtitle='Sales Obtained'
          progress='0.5'
          increase='+21%'
          iconName='PointOfSaleIcon'
        />
        <StatBoxColumn
          title='32,4411'
          subtitle='New Clients'
          progress='0.30'
          increase='+5%'
          iconName='PersonAddIcon'
        />
        <StatBoxColumn
          title='32,4411'
          subtitle='New Clients'
          progress='0.30'
          increase='+5%'
          iconName='TrafficIcon'
        />
        {/* Second Row */}
        <Box gridColumn='span 8' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: '26px', color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height='250px' mt='-20px'>
            <LineChart isDashboard={isDashboard} />
          </Box>
        </Box>

        {/* Transaction */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p='15px'
            borderBottom={`4px solid ${colors.primary[500]}`}
          >
            <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              p='15px'
              borderBottom={`4px solid ${colors.primary[500]}`}
            >
              <Box>
                <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.greenAccent[500]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]} p='30px'>
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
            <ProgressCircle size='125' />
            <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '15px' }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn='span 4' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Typography variant='h5' fontWeight='600' sx={{ padding: '30px 30px 0 30px' }}>
            Sales Quantity
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard={isDashboard} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          padding='30px'
        >
          <Typography variant='h5' fontWeight='600' sx={{ marginBottom: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={isDashboard} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
