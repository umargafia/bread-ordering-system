import { AdminPanelSettings } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography, useTheme } from '@mui/material';
import React from 'react';

function AdminAppBar(props) {
  const theme = useTheme();
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ bgcolor: theme.palette.primary.black }}>
        <Button
          sx={{
            color: '#fff',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <AdminPanelSettings sx={{ color: 'white' }} />
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AdminAppBar;
