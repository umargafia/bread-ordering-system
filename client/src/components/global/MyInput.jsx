import { Box, TextField } from '@mui/material';
import React from 'react';

function MyInput({ text, type, props, fullWidth = false }) {
  return (
    <TextField
      fullWidth={fullWidth}
      variant="filled"
      placeholder={text}
      type={type}
      {...props}
      sx={{ m: 2 }}
    />
  );
}

export default MyInput;
