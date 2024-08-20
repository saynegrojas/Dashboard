import React from 'react';
import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import { tokens } from '../theme';

const LoadingProgress = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width='50%' m='0 auto' mt='40%'>
      <div className='circle-progress'>
        <CircularProgress size={50} sx={{ margin: 'auto', color: colors.primary[100] }} />
      </div>
      <Typography
        variant='h3'
        color={colors.grey[100]}
        sx={{ my: '20px', display: 'flex', justifyContent: 'center' }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingProgress;
