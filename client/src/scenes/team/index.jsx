import React, { useState } from 'react';
import { Box, useTheme, Typography, Button, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import {
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  LockOpenOutlined as LockOpenOutlinedIcon,
  SecurityOutlined as SecurityOutlinedIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import Header from '../../components/Header';
import useFetchData from '../../hooks/useFetchData';
import generateEndpoints from '../../constants';
import axios from 'axios';
import LoadingProgress from '../../components/LoadingProgress';
import { getTableStyle, getModalStyle } from './helperFunction';
import Form from '../form';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, loading, error, setData } = useFetchData('/api/team/getAll');
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const apiUrl = generateEndpoints();
  const access = true;
  // fetch single team member
  const fetchTeamMember = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/team/getById/?id=${id}`);
      setData(response.data);
    } catch (error) {
      setHttpError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => setOpenModal(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  // columns for the tables from team data
  // cellClassName: allow us to customize the column cell (color)
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerAlign: 'center',
      align: 'center',
    },
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
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: ({ row: { access } }) => {
        const colorMap = {
          user: colors.greenAccent[700],
          admin: colors.greenAccent[600],
          manager: colors.greenAccent[700],
        };

        const IconMap = {
          user: <SecurityOutlinedIcon />,
          admin: <AdminPanelSettingsOutlinedIcon />,
          manager: <LockOpenOutlinedIcon />,
        };

        return (
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='60%'
            m='0 auto'
            p='5px'
            backgroundColor={colorMap[access]}
          >
            {IconMap[access]}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  if (httpError || error) return <div>Error {error ?? httpError}</div>;

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title='TEAM' subtitle='Managing the Team Members' />
        <Box>
          <Button
            onClick={handleOpenModal}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              padding: '10px 20px',
            }}
          >
            Add Member
            <AddIcon color={colors.primary[700]} sx={{ ml: '10px' }} />
          </Button>
        </Box>
      </Box>
      <Box m='10px 0 0 0' height='75vh' sx={getTableStyle(colors)}>
        {loading || isLoading ? (
          <LoadingProgress />
        ) : (
          <DataGrid
            rows={data}
            columns={columns}
            disableColumnSelector
            onRowClick={(params) => fetchTeamMember(params.row.id)}
          />
        )}
      </Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={getModalStyle(colors)}>
          <Form
            endPoint='api/team/create'
            title='CREATE TEAM MEMBER'
            subtitle='Create a new team member profile'
            submitLabel='Create New Member'
            showAccess={access}
            setIsLoading={setIsLoading}
            setData={setData}
            setError={setHttpError}
            setOpenModal={setOpenModal}
            showAddress={false}
            showCity={false}
            showZip={false}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Team;
