import { Box } from '@mui/material';
import React from 'react';

import WelcomeSection from '../components/homePage/WelcomeSection';
import CardsSection from '../components/homePage/CardsSection';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CartDrawer from '../components/cart/Cart';
import ItemPage from './ItemPage';

function HomePage() {
  return (
    <Box mb={3}>
      <Grid container>
        <Grid xs={12} container>
          <WelcomeSection />
          <Grid xs={8}>
            <CardsSection />
          </Grid>
          <Grid xs={3.5}>
            <CartDrawer />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
