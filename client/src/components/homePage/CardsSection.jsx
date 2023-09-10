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
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
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
