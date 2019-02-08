import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '~/store/ducks/categories';
import { Types as ProductsTypes } from '~/store/ducks/products';
import { Types as ProdTypes } from '~/store/ducks/prod';
import { Types as CartTypes } from '~/store/ducks/cart';

import { getCategories } from './categories';
import { getProducts } from './products';
import { getProduct } from './prod';
import {
  addCart, removeCart, setQtd, addOneItem, removeOneItem,
} from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
    takeLatest(ProductsTypes.REQUEST, getProducts),
    takeLatest(ProdTypes.REQUEST, getProduct),
    takeLatest(CartTypes.ADD_CART_REQUEST, addCart),
    takeLatest(CartTypes.REMOVE_CART, removeCart),
    takeLatest(CartTypes.SET_QTD_CART, setQtd),
    takeLatest(CartTypes.ADD_ONE_ITEM, addOneItem),
    takeLatest(CartTypes.REMOVO_ONE_ITEM, removeOneItem),
  ]);
}
