import React, { useState } from 'react';
import { Box, useTheme, Typography, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import {
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  LockOpenOutlined as LockOpenOutlinedIcon,
  SecurityOutlined as SecurityOutlinedIcon,
} from '@mui/icons-material';
import Header from '../../components/Header';
import useFetchTeam from '../../hooks/useFetchTeam';
import generateEndpoints from '../../constants';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { team, loading, error, setTeam } = useFetchTeam();
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const apiUrl = generateEndpoints();

  // fetch single team member
  const fetchTeamMember = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/team/getById/?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setHttpError(`Encountered http error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setTeam(result);
    } catch (error) {
      setHttpError(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(team);

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
      <Header title='TEAM' subtitle='Managing the Team Members' />
      <Box
        m='40px 0 0 0'
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
        {loading || isLoading ? (
          <Box width='50%' m='0 auto' mt='40%'>
            <Typography
              variant='h3'
              color={colors.grey[100]}
              sx={{ mb: '20px', display: 'flex', justifyContent: 'center' }}
            >
              Loading...
            </Typography>
            <LinearProgress sx={{ color: colors.primary[400] }} />
          </Box>
        ) : (
          <DataGrid
            rows={team}
            columns={columns}
            disableColumnSelector
            onRowClick={(params) => fetchTeamMember(params.row.id)}
          />
        )}
      </Box>
    </Box>
  );
};

export default Team;
