import { Box, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MyAppbar from '../components/global/MyAppbar';
import Mycard from '../components/global/Mycard';
import ReceiptItem from '../components/recipt/ReciptItem';
import { getOrders } from '../store/api';
import IphoneLists from '../constants/IphoneLists';
import Billing from '../components/order/Billing';
import Address from '../components/order/Address';
import WelcomeSection from '../components/homePage/WelcomeSection';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function ReceptPage() {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async () => {
    setLoading(true);
    try {
      const response = await getOrders({ token });
      const updatedOrders = mapOrdersWithProducts(response.data);
      setOrders(updatedOrders.reverse());
      console.log(updatedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
    setLoading(false);
  };

  const mapOrdersWithProducts = (data) => {
    return data.map((item) => {
      const cartId = item?.cartId?.product;
      const iphone = IphoneLists.find((i) => i.id === parseInt(cartId));
      return {
        name: iphone?.name,
        image: iphone?.image,
        status: item?.status,
        totalPrice: item?.cartId?.totalPrice,
        quantity: item?.cartId?.quantity,
        id: item._id,
      };
    });
  };

  return (
    <>
      <WelcomeSection />
      <Grid container>
        <Grid xs={9}>
          <Typography variant="h4" color="primary.black" mt={2}>
            Orders
          </Typography>
          <Mycard
            sx={{
              mb: 1,
              height: '80vh',
              overflowY: 'auto',
              p: 2,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '90%',
                }}
              >
                <CircularProgress sx={{ color: 'primary.black' }} />
              </Box>
            ) : orders.length === 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '90%',
                }}
              >
                <Typography variant="h4" color="primary">
                  No orders
                </Typography>
              </Box>
            ) : (
              orders.map((item) => {
                return <ReceiptItem item={item} key={item.id} />;
              })
            )}
          </Mycard>
        </Grid>
        <Grid xs={3}>
          <Mycard sx={{ mb: 2, p: 2, mt: 8, ml: 1 }}>
            <Grid container>
              <Grid sm={12}>
                <Billing />
              </Grid>
              <Grid sm={12} sx={{ pl: 2 }}>
                <Address />
              </Grid>
            </Grid>
          </Mycard>
        </Grid>
      </Grid>
    </>
  );
}
