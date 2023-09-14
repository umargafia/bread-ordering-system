import React, { useEffect, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Drawer from '@mui/material/SwipeableDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartsItem from './CartsItem';
import MyButton from '../global/MyButton';
import { getCarts } from '../../store/api';
import { setCartsReducer, setNoOfCarts } from '../../store/authSlice';
import Row from '../global/Row';

const CartDrawer = ({ handleOpen, open }) => {
  const { token, noOfCarts } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartsList, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);

  const fetchCarts = async () => {
    try {
      const response = await getCarts({ token });
      const fetchedCarts = response?.data?.carts.reverse();

      const total = fetchedCarts.reduce((acc, item) => {
        return acc + parseInt(item.totalPrice);
      }, 0);

      setCarts(fetchedCarts);
      dispatch(setCartsReducer(fetchedCarts));
      setNoOfItems(fetchedCarts.length);
      setTotalPrice(total);
      dispatch(setNoOfCarts(fetchedCarts.length));
    } catch (error) {}
  };

  useEffect(() => {
    fetchCarts();
  }, [noOfCarts, token]);

  const handleClick = () => {
    navigate('/order', {
      state: {
        cartInfo: {
          noOfItems,
          totalPrice,
        },
      },
    });
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
        height: '100vh',
        mt: 3,
        ml: 1,
        borderRadius: 2,
        p: 2,
      }}
      container
    >
      <Typography color="white" variant="h5">
        My Cart
      </Typography>
      <Row>
        <Typography
          variant="h6"
          sx={{ color: 'white', fontWeight: '800', mr: 'auto' }}
        >
          Number of items
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'white', fontWeight: '800', mr: 'auto' }}
        >
          {noOfItems} {noOfItems > 1 ? 'items' : 'item'}
        </Typography>
      </Row>
      <Divider style={{ background: 'white' }} />
      <Box sx={{ height: '78vh', overflowY: 'auto' }}>
        {cartsList?.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ p: 2, color: 'white', textAlign: 'center' }}
          >
            Your cart is empty.
          </Typography>
        ) : (
          <Box>
            {cartsList?.map((item) => (
              <CartsItem item={item} key={item._id} fetchCarts={fetchCarts} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartDrawer;

// <Typography
//   variant="h6"
//   sx={{ color: 'primary.main', fontWeight: '800', mr: 'auto' }}
// >
//   {noOfItems} {noOfItems > 1 ? 'items' : 'item'}
// </Typography>;

// <MyButton
//   text={`Checkout now (₦${totalPrice})`}
//   sx={{ width: '90%' }}
//   onClick={handleClick}
// />;

//<Grid xs={12} sx={{ height: '78vh', overflowY: 'auto' }}>
//   {cartsList?.length === 0 ? (
//     <Typography
//       variant="body1"
//       sx={{ p: 2, color: 'primary.main', textAlign: 'center' }}
//     >
//       Your cart is empty.
//     </Typography>
//   ) : (
//     <Box>
//       {cartsList?.map((item) => (
//         <CartsItem item={item} key={item._id} fetchCarts={fetchCarts} />
//       ))}
//     </Box>
//   )}
// </Grid>
