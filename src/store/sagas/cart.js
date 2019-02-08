import api from '~/services/api';

import { call, put, select } from 'redux-saga/effects';

import { Creators as CartActions } from '~/store/ducks/cart';


export function* addCart(action) {
  try {
    const cart = yield select(state => state.cart.data);
    const prod = cart.find(p => p.product.id === action.payload.prodId);
    if (prod) {
      const dadosCart = cart.map(c => (
        c.product.id === action.payload.prodId ? { ...c, qtd: c.qtd + 1 } : { ...c }
      ));
      yield put(CartActions.addCartSuccess(dadosCart));
    } else {
      const response = yield call(api.get, `/products/${action.payload.prodId}`);
      const ProdFormat = { ...response.data, priceFormat: (response.data.price).toFixed(2).replace('.', ',') };
      const dadosCart = [...cart, { qtd: 1, product: ProdFormat }];
      yield put(CartActions.addCartSuccess(dadosCart));
    }
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro add no carrinho'));
  }
}

export function* removeCart(action) {
  try {
    const cart = yield select(state => state.cart.data);

    const dadosCart = cart.filter(c => (
      c.product.id !== action.payload.id
    ));
    yield put(CartActions.addCartSuccess(dadosCart));
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro add no carrinho'));
  }
}

export function* setQtd(action) {
  try {
    const cart = yield select(state => state.cart.data);
    const qdt = action.payload.qtd < 1 ? 1 : action.payload.qtd;
    const dadosCart = cart.map(c => (
      c.product.id === action.payload.prodId ? { ...c, qtd: parseInt(qdt, 10) } : { ...c }
    ));
    yield put(CartActions.addCartSuccess(dadosCart));
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro add no carrinho'));
  }
}

export function* addOneItem(action) {
  try {
    const cart = yield select(state => state.cart.data);
    const dadosCart = cart.map(c => (
      c.product.id === action.payload.prodId ? { ...c, qtd: c.qtd + 1 } : { ...c }
    ));
    yield put(CartActions.addCartSuccess(dadosCart));
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro add no carrinho'));
  }
}

export function* removeOneItem(action) {
  try {
    const cart = yield select(state => state.cart.data);
    const dadosCart = cart.map(c => (
      c.product.id === action.payload.prodId ? { ...c, qtd: (c.qtd > 1 ? c.qtd - 1 : 1) } : { ...c }
    ));
    yield put(CartActions.addCartSuccess(dadosCart));
  } catch (err) {
    yield put(CartActions.addCartFailure('Erro add no carrinho'));
  }
}
