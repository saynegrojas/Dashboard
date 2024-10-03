import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

const Header = ({ title, subtitle, isGraph = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb='30px'>
      <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{ mb: '5px' }}>
        {title}
      </Typography>
      {!isGraph ? (
        <Typography variant='h5' color={colors.grey[400]}>
          {subtitle}
        </Typography>
      ) : (
        <Box width='70%'>
          <Typography variant='h5' color={colors.grey[400]}>
            {subtitle}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Header;
