const getTableStyle = (colors) => {
  return {
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
  };
};

const getModalStyle = (colors) => {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-40%, -50%)',
    width: 800,
    bgcolor: colors.primary[500],
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
};

export { getTableStyle, getModalStyle };
