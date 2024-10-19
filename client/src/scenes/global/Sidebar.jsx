import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Avatar, Box, IconButton, Typography, useTheme } from '@mui/material';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import {
  HomeOutlined as HomeOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  ContactsOutlined as ContactsOutlinedIcon,
  // ReceiptOutlined as ReceiptOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  PieChartOutlined as PieChartOutlinedIcon,
  LineStyleOutlined as LineStyleOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  MapOutlined as MapOutlinedIcon,
} from '@mui/icons-material';
import { mockDataTeam } from '../../data/mockData';

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => setSelected(title);

  return (
    <MenuItem
      active={selected === title}
      onClick={handleClick}
      style={{
        color: colors.grey[100],
        marginBottom: `${!isCollapsed ? '' : '1.2rem'}`,
        display: `${!isCollapsed ? '' : 'flex'}`,
        justifyContent: `${!isCollapsed ? '' : 'center'}`,
        alignItems: `${!isCollapsed ? 'center' : ''}`,
      }}
    >
      {icon}
      {!isCollapsed ? (
        <Typography color={colors.grey[100]} style={{ display: 'inline', margin: '1rem .8rem' }}>
          {title}
        </Typography>
      ) : null}
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('dashboard');

  // TODO: Replace Mock data
  const { name, access, profile_img } = mockDataTeam[0];
  const showImg = false;

  const capitalizeWords = (words) => {
    return words
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 20px 5px 20px !important',
          display: 'flex !important',
          justifyContent: 'space-between !important',
          alignItems: 'center !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: '10px 0 20px 0', color: colors.grey[100] }}
          >
            {!isCollapsed && (
              <Box display='flex' justifyContent='space-between' alignItems='center' ml='15px'>
                <Typography variant='h3' color={colors.grey[100]}>
                  {access.toUpperCase()}
                </Typography>
                <IconButton onClick={() => setIsCollapsed((prevState) => !prevState)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                {!showImg ? (
                  <img
                    alt='profile-user'
                    width='100px'
                    height='100px'
                    src={`${profile_img}`}
                    // src={`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX${'John Doe'}&background=0D8ABC&color=fff`}
                    style={{ cursor: 'pointer', borderRadius: '50%' }}
                  />
                ) : (
                  <Avatar sx={{ width: '100px', height: '100px' }} />
                )}
              </Box>
              <Box textAlign='center'>
                <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' mt='5px'>
                  {name}
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  {capitalizeWords(access)}
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px ' }}>
              Data
            </Typography>
            <Item
              title='Manage Team'
              to='/team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='Contact Information'
              to='/contacts'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            {/* <Item
              title='Invoices Balance'
              to='/invoices'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            /> */}
            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Pages
            </Typography>
            <Item
              title='Profile Form'
              to='/form'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='Calendar'
              to='/calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='FAQ Page'
              to='/faq'
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Typography variant='h6' color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
              Charts
            </Typography>
            <Item
              title='Call Transfer Quantity'
              to='/bar'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='Customer Satisfactory'
              to='/pie'
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='Current Calls'
              to='/line'
              icon={<LineStyleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
            <Item
              title='Call Tracker'
              to='/geography'
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              isCollapsed={isCollapsed}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
