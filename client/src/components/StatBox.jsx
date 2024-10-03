import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../theme';
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title, subtitle, content }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width='100%' m='0 20px' p='20px'>
      <Box display='flex' justifyContent='space-between'>
        <Box>
          <Typography variant='h5' fontWeight='bold' sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        {/* <Box>
          <ProgressCircle progress={progress} />
        </Box> */}
      </Box>
      <Box display='flex' justifyContent='space-between' mt='2px'>
        <Typography variant='p' sx={{ color: colors.greenAccent[600] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center'>
        <Typography
          variant='h2'
          fontWeight='bold'
          fontStyle='italic'
          sx={{ color: colors.greenAccent[400] }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
