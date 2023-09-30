import { AdminPanelSettings } from '@mui/icons-material';
import { AppBar, Button, Toolbar, useTheme } from '@mui/material';
import React from 'react';
import Row from '../../components/global/Row';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

function AdminAppBar(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  }

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ bgcolor: theme.palette.primary.black }}>
        <Row sx={{ justifyContent: 'space-between', width: '100%' }}>
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
          <Row>
            <Button
              onClick={() => navigate('/')}
              sx={{
                color: '#fff',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate('/users')}
              sx={{
                color: '#fff',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              users
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                color: '#fff',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              Logout
            </Button>
          </Row>
        </Row>
      </Toolbar>
    </AppBar>
  );
}

export default AdminAppBar;
