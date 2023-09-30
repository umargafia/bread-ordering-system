import { Box } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import Address from '../components/order/Address';
import Item from '../components/order/Item';
import Billing from '../components/order/Billing';
import WelcomeSection from '../components/homePage/WelcomeSection';
import Row from '../components/global/Row';

function OrderPage() {
  return (
    <Box sx={{ background: 'primary.white', minHeight: '83vh' }}>
      <WelcomeSection />
      <Item />
    </Box>
  );
}

export default OrderPage;
