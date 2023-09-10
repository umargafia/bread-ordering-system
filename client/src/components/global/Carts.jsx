import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import MyCard from './Mycard';

function Carts({ item }) {
  const navigate = useNavigate();
  function handleClick(item) {
    navigate(`/item/${item.id}`);
  }
  return (
    <Grid container sm={3} sx={{ m: 2, height: 300 }}>
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
            ₦{item.price}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, ml: 1, mr: 1 }}
            onClick={() => handleClick(item)}
          >
            more details
          </Button>
        </Box>
      </MyCard>
    </Grid>
  );
}

export default Carts;
