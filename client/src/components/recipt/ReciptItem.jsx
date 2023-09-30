import React from 'react';
import Row from '../global/Row';
import { Box, Divider, Typography } from '@mui/material';
import formatNumberWithCommas from '../../constants/FormatNumber';

function ReceiptItem({ item }) {
  return (
    <>
      <Box
        sx={{
          m: 1,
          width: '200px',
          height: '300px',
          backgroundColor: 'primary.white',
          borderRadius: '10px',
          p: 1,
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          transition: 'all 0.3s',
          '&:hover': {
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          },
        }}
      >
        <Box>
          <img
            src={item.image}
            alt={item.name}
            style={{ height: 120, borderRadius: '10px' }}
          />
          <Box
            sx={{
              pl: 1,
              pt: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Row>
              <Typography mr={1} variant="h5" color="gray">
                Status:
              </Typography>
              <Typography variant="h5" textTransform="capitalize">
                {item.status}
              </Typography>
            </Row>

            <Row>
              <Typography mr={1} variant="h5" color="gray">
                Items:
              </Typography>
              <Typography variant="h5">{item.quantity}</Typography>
            </Row>

            <Row>
              <Typography mr={1} variant="h5" color="gray">
                Price:
              </Typography>
              <Typography variant="h5">
                ₦{formatNumberWithCommas(item.totalPrice)}
              </Typography>
            </Row>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ReceiptItem;
