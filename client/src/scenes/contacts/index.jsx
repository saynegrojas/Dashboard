import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';
import {
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  LockOpenOutlined as LockOpenOutlinedIcon,
  SecurityOutlined as SecurityOutlinedIcon,
} from '@mui/icons-material';
import Header from '../../components/Header';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // columns for the tables from mockDataContacts data
  // cellClassName: allow us to customize the column cell (color)
  const columns = [
    { field: 'id', headerName: 'ID', headerAlign: 'center', align: 'center', flex: 0.5 },
    { field: 'registerId', headerName: 'Register ID', headerAlign: 'center', align: 'center' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      align: 'center',
      headerAlign: 'center',
    },
    { field: 'phone', headerName: 'Phone Number', headerAlign: 'center', align: 'center' },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      cellClassName: 'email-column--cell',
    },
    { field: 'address', headerName: 'Address', headerAlign: 'center', align: 'center', flex: 1 },
    { field: 'city', headerName: 'City', headerAlign: 'center', align: 'center' },
    { field: 'zipCode', headerName: 'Zip Code', headerAlign: 'center', align: 'center' },
  ];

  return (
    <Box m='20px'>
      <Header title='CONTACTS' subtitle='List of Contacts for Future Reference' />
      <Box
        m='40px 0 0 0 '
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .email-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
            display: 'flex',
            justifyContent: 'center',
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[100]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Contacts;
