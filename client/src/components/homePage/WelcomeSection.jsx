import { Box, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import * as Scroll from 'react-scroll';

import MyCard from '../global/Mycard';
import { useSelector } from 'react-redux';
import image from '../../assets/30u.png';
const Link = Scroll.Link;
export default function WelcomeSection() {
  const { user } = useSelector((state) => state.auth);
  return (
    <MyCard
      sx={{
        width: '100%',
        height: 120,
        bgcolor: 'primary.main',
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
          xs={6}
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
