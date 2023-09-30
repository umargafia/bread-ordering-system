import { Box, Button, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import * as Scroll from 'react-scroll';

import MyCard from '../global/Mycard';
import { useSelector } from 'react-redux';
import image from '../../assets/30u.png';
import { useNavigate } from 'react-router-dom';
const Link = Scroll.Link;
export default function WelcomeSection() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <MyCard
      sx={{
        width: '100%',
        height: 120,
        bgcolor: 'primary.black',
        borderRadius: 3,
      }}
    >
      <Grid container sx={{ width: '100%', height: '100%' }}>
        <Grid
          xs={6}
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'self-start',
            flexDirection: 'column',
            pl: 10,
          }}
        >
          <Typography sx={{ color: 'white' }}>
            Welcome,{' '}
            <span
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'capitalize',
                fontStyle: 'italic',
              }}
            >
              {user.name}
            </span>
          </Typography>
          <Typography sx={{ color: 'white', fontWeight: 'bold' }} variant="h5">
            Let's Oder Your bread now
          </Typography>
        </Grid>
        <Grid
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button sx={{ color: 'white', mr: 1 }} onClick={() => navigate('/')}>
            Home
          </Button>
          <Button
            sx={{ color: 'white', mr: 1 }}
            onClick={() => navigate('/recept')}
          >
            Orders
          </Button>
          <Button sx={{ color: 'white' }}>Logout</Button>
        </Grid>
        <Grid
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <img
            src={image}
            style={{
              width: '200px',
            }}
          />
        </Grid>
      </Grid>
    </MyCard>
  );
}
