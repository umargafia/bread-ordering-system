import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import MyCard from './Mycard';
import { AddToCart } from '../../store/api';
import { useSelector } from 'react-redux';
import MyButton from './MyButton';
import { Add, Remove } from '@mui/icons-material';
import formatNumberWithCommas from '../../constants/FormatNumber';

function Carts({ item }) {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(parseFloat(item.price)); // Use parseFloat for better handling of price
  const { token } = useSelector((state) => state.auth);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setIsAddToCart(true);
    setQuantity(1);
    setPrice(parseFloat(item.price));
  };

  const toggleAddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setPrice((prevPrice) => prevPrice + parseFloat(item.price));
  };

  const handleRemoveQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setPrice((prevPrice) =>
        quantity === 1 ? item.price : prevPrice - parseFloat(item.price)
      );
    }
  };

  const createCart = async () => {
    setIsLoading(true);
    const data = {
      quantity,
      product: {
        id: item.id,
        price: parseFloat(item.price),
      },
      totalPrice: price,
    };

    await AddToCart({ data, token });
    setIsLoading(false);
    window.location.reload();
  };

  const handleBuyNow = () => {
    navigate('/order', {
      state: {
        cartInfo: {
          noOfItems: quantity,
          totalPrice: price,
          now: true,
          id: item.id,
        },
      },
    });
  };
  return (
    <Grid container sm={3} sx={{ m: 2, height: 400 }}>
      <MyCard
        sx={{
          padding: 0,
          overflow: 'hidden',
          borderRadius: 2,
          pb: 3,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => handleClick(item)}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              height: 200,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>
        <Divider sx={{ my: 0.5 }} />
        <Box
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography fontWeight="bold" variant="h5">
            ₦{formatNumberWithCommas(price)}
          </Typography>
          <Box>
            {!isAddToCart || quantity <= 0 ? (
              <MyButton
                text="Add to cart"
                sx={{ mt: 2 }}
                fullWidth
                onClick={handleAddToCart}
              />
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Button
                  variant="contained"
                  onClick={toggleAddQuantity}
                  sx={{ backgroundColor: 'primary.black' }}
                >
                  <Add sx={{ color: 'white', background: 'primary.black' }} />
                </Button>
                <Typography variant="h4" sx={{ mx: 4, color: 'primary.black' }}>
                  {quantity}
                </Typography>

                <Button
                  variant="contained"
                  onClick={handleRemoveQuantity}
                  sx={{ backgroundColor: 'primary.black' }}
                >
                  <Remove sx={{ color: 'white' }} />
                </Button>
              </Box>
            )}
            {quantity >= 1 ? (
              <MyButton
                fullWidth
                text={
                  loading ? (
                    <CircularProgress
                      size={20}
                      sx={{ color: 'primary.white' }}
                    />
                  ) : (
                    'Add to cart'
                  )
                }
                sx={{ mt: 2 }}
                onClick={createCart}
              />
            ) : (
              <MyButton
                fullWidth
                text="Buy Now"
                sx={{ mt: 2 }}
                onClick={handleBuyNow}
              />
            )}
          </Box>
        </Box>
      </MyCard>
    </Grid>
  );
}

export default Carts;
