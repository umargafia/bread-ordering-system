import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppleIcon from '@mui/icons-material/Apple';
import { Home } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrawer from '../cart/Cart';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Profile from '../../screens/Profile';
import { useSelector } from 'react-redux';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
function MyAppbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { noOfCarts, user } = useSelector((state) => state.auth);

  const handleOpen = () => {
    setOpen((pre) => !pre);
  };

  const handleOpenProfile = () => {
    setOpenProfile((pre) => !pre);
  };

  function handleClick(e) {
    console.log(e);
  }

  return (
    <AppBar
      position="sticky"
      sx={{ mb: 4, width: 120, mt: 1, borderRadius: 3 }}
    >
      <Profile
        openProfile={openProfile}
        handleOpenProfile={handleOpenProfile}
      />
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          pt: 20,
        }}
      >
        <Box>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => {
              navigate('/');
            }}
          >
            <Typography color="white">Home</Typography>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => navigate('/cart')}
          >
            <Typography color="white">Carts</Typography>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => {
              navigate('/recept');
            }}
          >
            <Typography color="white">Orders</Typography>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleOpenProfile}
          >
            <Typography
              sx={{
                mt: 0.5,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Logout
            </Typography>
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <Button
            sx={{
              color: '#fff',
              alignItems: 'center',
              display: 'flex',
            }}
            onClick={() => {
              navigate('/');
            }}
          ></Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppbar;
