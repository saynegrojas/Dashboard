import React, { useContext } from 'react';
import { Box, IconButton, useTheme, InputBase, Tooltip } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import {
  DarkModeOutlined as DarkModeOutlinedIcon,
  LightModeOutlined as LightModeOutlinedIcon,
  Search as SearchIcon,
  NotificationAddOutlined as NotificationOutlinedIcon,
} from '@mui/icons-material';
import TopbarDropdown from '../../components/TopbarDropdown';
import { mockProfileOptions, mockSettingOptions } from '../../data/mockData';
import NotificationDrawer from '../../components/NotificationDrawer';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      padding={2}
      borderBottom='1px solid'
      borderColor={colors.grey[200]}
    >
      {/* Search bar */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display='flex'>
        <Tooltip title={theme.palette.mode === 'dark' ? 'dark' : 'light'}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </IconButton>
        </Tooltip>
        <NotificationDrawer />
        <TopbarDropdown data={mockSettingOptions} iconName='Settings' tooltipTitle='Settings' />
        <TopbarDropdown data={mockProfileOptions} iconName='Person' tooltipTitle='Profile' />
      </Box>
    </Box>
  );
};

export default Topbar;
