import React, { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import IphoneLists from '../../constants/IphoneLists';
import { removeCarts } from '../../store/api';

function CartsItem({ item, fetchCarts }) {
  const theme = useTheme();
  const [curItem, setItem] = useState(null); // Initialize curItem as null
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const id = item.product * 1;

  useEffect(() => {
    const selectedItem = IphoneLists.find((i) => i.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  const handleNavigate = () => {};

  const handleRemove = async () => {
    setLoading(true);
    await removeCarts({ token, cartID: item._id });
    fetchCarts();
    setLoading(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        mt: 1,
        backgroundColor: 'white',
        boxShadow: theme.shadows[3],
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          mr: 'auto',
          display: 'flex',
        }}
      >
        <Box
          sx={{ cursor: 'pointer', position: 'relative' }}
          onClick={handleNavigate}
        >
          {curItem && ( // Check if curItem exists before rendering
            <img
              src={curItem.image}
              alt={curItem.name}
              style={{
                width: '100px',
                height: '100px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mr: 'auto',
            ml: 2,
          }}
        >
          <Typography color="gray">
            ₦{curItem?.price} * {item?.quantity} Items
          </Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
            ₦{item?.totalPrice}
          </Typography>
        </Box>
        <Box sx={{ position: 'absolute', right: 2, top: 2 }}>
          <IconButton onClick={handleRemove}>
            {loading ? (
              <CircularProgress size={20} sx={{ color: 'primary' }} />
            ) : (
              <ClearIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default CartsItem;
