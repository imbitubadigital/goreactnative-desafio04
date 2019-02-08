import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import prod from './prod';
import cart from './cart';

export default combineReducers({
  categories,
  products,
  prod,
  cart,
});
