import { Box } from '@mui/material';
import React from 'react';

import WelcomeSection from '../components/homePage/WelcomeSection';
import AdsSection from '../components/homePage/AdsSection';
import CardsSection from '../components/homePage/CardsSection';
import MyAppbar from '../components/global/MyAppbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CartDrawer from '../components/cart/Cart';

function HomePage() {
  return (
    <Box>
      <Grid container>
        <Grid xs={1} mr={5}>
          <MyAppbar />
        </Grid>
        <Grid xs={10} container>
          <WelcomeSection />
          <Grid xs={9}>
            <CardsSection />
          </Grid>
          <Grid xs={3}>
            <CartDrawer />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
