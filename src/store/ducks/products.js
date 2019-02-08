import Immutalble from 'seamless-immutable';

export const Types = {
  REQUEST: 'product/REQUEST',
  SUCCESS: 'product/SUCCESS',
  FAILURE: 'product/FAILURE',
};

const INITIAL_STATE = Immutalble({
  data: {},
  loading: false,
  catId: null,
  error: null,
});

export default function getProducts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true, catId: action.payload.catId };

    case Types.SUCCESS:
      return {
        data: action.payload.data,
        catId: action.payload.catId,
        loading: false,
        error: null,
      };

    case Types.FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  productsRequest: catId => ({
    type: Types.REQUEST,
    payload: { catId },
  }),

  productsSuccess: (data, catId) => ({
    type: Types.SUCCESS,
    payload: { data, catId },
  }),

  productsFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
