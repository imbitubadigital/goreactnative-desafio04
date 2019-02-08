import api from '~/services/api';

import { call, put } from 'redux-saga/effects';

import { Creators as ProductsActions } from '~/store/ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.catId}`);

    const ProductsFormat = response.data.products.map(p => (
      { ...p, priceFormat: (p.price).toFixed(2).replace('.', ',') }
    ));
    const dados = { ...response.data, products: ProductsFormat };

    yield put(ProductsActions.productsSuccess(dados, action.payload.catId));
  } catch (err) {
    yield put(ProductsActions.productsFailure('Erro ao carregar produtos'));
  }
}
