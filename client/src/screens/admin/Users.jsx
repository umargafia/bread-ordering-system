import { Box } from '@mui/material';
import React from 'react';
import Users from '../../ui/admin/Users';
import AdminAppBar from '../../ui/admin/AppBar';

function UsersPage(props) {
  return (
    <Box>
      <AdminAppBar />
      <Users row />
    </Box>
  );
}

export default UsersPage;
