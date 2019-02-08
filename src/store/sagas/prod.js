import api from '~/services/api';

import { call, put } from 'redux-saga/effects';

import { Creators as ProdActions } from '~/store/ducks/prod';
import { Creators as CartActions } from '~/store/ducks/cart';

export function* getProduct(action) {
  try {
    yield put(CartActions.reserAdded());
    const response = yield call(api.get, `/products/${action.payload.prodId}`);
    const ProdFormat = { ...response.data, priceFormat: (response.data.price).toFixed(2).replace('.', ',') };

    yield put(ProdActions.prodSuccess(ProdFormat));
  } catch (err) {
    yield put(ProdActions.prodFailure('Erro ao carregar produto'));
  }
}
