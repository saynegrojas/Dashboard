import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import StatBoxColumn from '../../components/StatBoxColumn';
import Team from './Team';
import PieChart from '../../components/PieChart';

const Dashboard = ({ userData }) => {
  console.log('DAHS', userData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDashboard = true;
  const user = 'Greg';

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='CALL CENTER' subtitle={`Welcome to your dashboard, ${user}`} />

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
        <StatBoxColumn title='Agents Available' content='11' />
        <StatBoxColumn title='Answered Calls' content='224' />
        <StatBoxColumn title='Average Handling Time' content='03:44' span='span 3' />
        <StatBoxColumn title='Average Wait Time' content='01:24' span='span 3' />
        <StatBoxColumn title='Abandon Rate' content=' 5%' />
        {/* Transaction */}
        <Box
          gridColumn='span 7'
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
              Agent Performace
              <Box
                display='flex'
                justifyContent='space-between'
                fontWeight='normal'
                fontSize='0.8571428571428571rem'
              >
                <Typography variant='p' sx={{ color: colors.greenAccent[600] }}>
                  Current Month
                </Typography>
              </Box>
            </Typography>
          </Box>
          {/* TEAMS */}
          <Team userData={userData} />
        </Box>
        <Box
          gridColumn='span 5'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          sx={{ padding: '20px 30px 0 30px' }}
        >
          <Typography variant='h5' fontWeight='600'>
            Customer Satisfactory
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='p' sx={{ color: colors.greenAccent[600] }}>
              Current Month
            </Typography>
          </Box>
          <Box height='240px' mt='0px'>
            {/* <ProgressCircle size='125' /> */}
            <PieChart isDashboard={isDashboard} />
            {/* <Typography variant='h5' color={colors.greenAccent[500]} sx={{ mt: '1px' }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography> */}
          </Box>
        </Box>
        {/* Second Row */}
        <Box gridColumn='span 7' gridRow='span 2' backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
                Current Calls
              </Typography>
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='p' sx={{ color: colors.greenAccent[600] }}>
                  Today
                </Typography>
              </Box>
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
        <Box gridColumn='span 5' gridRow='span 2' backgroundColor={colors.primary[400]} p='20px'>
          <Typography variant='h5' fontWeight='600'>
            Call Transfer Quantity
          </Typography>
          <Box height='260px' mt='0'>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant='p' sx={{ color: colors.greenAccent[600] }}>
                Current Month
              </Typography>
            </Box>
            <BarChart isDashboard={isDashboard} />
          </Box>
        </Box>
        {/* <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          padding='20px'
        >
          <Typography variant='h5' fontWeight='600' sx={{ marginBottom: '15px' }}>
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={isDashboard} />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;


        // <Box>
        //   <Typography variant='h5' fontWeight='600' color={colors.greenAccent[500]}>
        //     {user.id}
        //   </Typography>
        //   <Box display='flex' justifyContent='center' alignItems='center'>
        //     {user?.profile_img ? (
        //       <Avatar alt={user.name} src={`${user.profile_img}`} />
        //     ) : (
        //       <Avatar sx={{ width: '100px', height: '100px' }} />
        //     )}
        //     <Box ml='10px' color={colors.grey[100]}>
        //       {user.name}
        //     </Box>
        //   </Box>

        //   <Typography color={colors.greenAccent[500]}>{user.incoming_calls}</Typography>
        // </Box>
        // <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
        //   ${user.abandoned_calls}
        // </Box>
        // <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
        //   ${user.abandoned_calls}
        // </Box>
        // <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
        //   ${user.abandoned_calls}
        // </Box>
        // <Box backgroundColor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
        //   ${user.abandoned_calls}
        // </Box>