import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartsItem from './CartsItem';

import { getCarts } from '../../store/api';
import { setCartsReducer, setNoOfCarts } from '../../store/authSlice';
import Row from '../global/Row';

const CartDrawer = ({ handleOpen, open }) => {
  const { token, noOfCarts } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [cartsList, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [noOfItems, setNoOfItems] = useState(0);

  const fetchCarts = async () => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        bgcolor: 'primary.black',
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
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
            <CircularProgress sx={{ color: 'white' }} size={30} />
          </Box>
        ) : cartsList?.length === 0 ? (
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
      <Button
        variant="outlined"
        sx={{ color: 'white', borderColor: 'white' }}
        fullWidth
        onClick={handleClick}
      >
        Checkout ₦{totalPrice}
      </Button>
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
