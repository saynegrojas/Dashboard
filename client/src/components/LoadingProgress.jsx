import React from 'react';
import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import { tokens } from '../theme';

const LoadingProgress = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width='100%' height='75vh' display='flex' justifyContent='center' alignItems='center'>
      <div className='circle-progress'>
        <CircularProgress size={40} sx={{ margin: 'auto', color: colors.primary[100] }} />
      </div>
      <Typography
        variant='h3'
        color={colors.grey[100]}
        sx={{ ml: '10px', display: 'flex', justifyContent: 'center' }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingProgress;
