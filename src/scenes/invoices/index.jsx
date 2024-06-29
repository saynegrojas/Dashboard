import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataInvoices } from '../../data/mockData';
import {
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  LockOpenOutlined as LockOpenOutlinedIcon,
  SecurityOutlined as SecurityOutlinedIcon,
} from '@mui/icons-material';
import Header from '../../components/Header';

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // columns for the tables from mockDataInvoices data
  // cellClassName: allow us to customize the column cell (color)
  const columns = [
    { field: 'id', headerName: 'ID', headerAlign: 'center', align: 'center' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
      headerAlign: 'center',
      align: 'center',
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
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { cost } }) => (
        <Typography color={colors.greenAccent[500]}>${cost}</Typography>
      ),
    },
    { field: 'date', headerName: 'Date', headerAlign: 'center', align: 'center' },
  ];

  return (
    <Box m='20px'>
      <Header title='INVOICES' subtitle='List of Invoice Balances' />
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
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
