import { Box } from '@mui/material';
import React from 'react';
import * as Scroll from 'react-scroll';

import Carts from '../global/Carts';
import iphoneLists from '../../constants/IphoneLists';

const Element = Scroll.Element;

function CardsSection() {
  return (
    <Element name="iphones" className="iphones">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'primary.black',
          mt: 3,
          borderRadius: 3,
          pb: 5,
          maxHeight: '80vh',
          overflowY: 'scroll',
        }}
        id="items"
      >
        {iphoneLists.map((item) => (
          <Carts key={item.name} item={item} />
        ))}
      </Box>
    </Element>
  );
}

export default CardsSection;
