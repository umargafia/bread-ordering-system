import iphonex from '../assets/iphonex.jpg';
import iphonexr from '../assets/iphonexr.png';
import iphonexs from '../assets/4.jpg';
import iphonexsmax from '../assets/5.jpg';
import iphone11 from '../assets/6.webp';
import iphone11pro from '../assets/7.jpeg';
import iphone12mini from '../assets/8.jpeg';

import iphonese from '../assets/2.jpg';

class Iphone {
  constructor(id, image, name, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
  }
}

export default [
  new Iphone(1, iphonex, 'Apple iPhone X', '100000'),
  new Iphone(2, iphonexr, 'Apple iPhone XR', '110000'),
  new Iphone(3, iphonexs, 'Apple iPhone XS', '120000'),
  new Iphone(4, iphonexsmax, 'Apple iPhone XS Max', '135000'),
  new Iphone(5, iphone11, 'Apple iPhone 11', '100000'),
  new Iphone(6, iphone11pro, 'Apple iPhone 11 Pro', '140000'),
  new Iphone(7, iphone11pro, 'Apple iPhone 11 Pro Max', '150000'),
  new Iphone(8, iphonese, 'Apple iPhone SE (2nd generation)', '160000'),
  new Iphone(9, iphone12mini, 'Apple iPhone 12 mini', '175000'),
];
