import Immutalble from 'seamless-immutable';

export const Types = {
  ADD_CART_REQUEST: 'cart/ADD_CART_REQUEST',
  ADD_CART_SUCCESS: 'cart/ADD_CART_SUCCESS',
  ADD_CART_FAILURE: 'cart/ADD_CART_FAILURE',
  RESET_ADDED: 'cart/RESET_ADDED',
  REMOVE_CART: 'cart/REMOVE_CART',
  SET_QTD_CART: 'cart/SET_QTD_CART',
  ADD_ONE_ITEM: 'cart/ADD_ONE_ITEM',
  REMOVO_ONE_ITEM: 'cart/REMOVO_ONE_ITEM',
};

const INITIAL_STATE = Immutalble({
  data: [],
  loading: false,
  error: null,
  added: false,
});

export default function getProducts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_CART_REQUEST:
      return { ...state, loading: true, added: false };

    case Types.ADD_CART_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
        added: true,
      };

    case Types.ADD_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        added: false,
      };

    case Types.RESET_ADDED:
      return {
        ...state,
        added: false,
      };

    case Types.REMOVE_CART:
      return { ...state, loading: true, added: false };

    case Types.SET_QTD_CART:
      return { ...state, loading: true, added: false };

    case Types.ADD_ONE_ITEM:
      return { ...state, loading: true, added: false };

    case Types.REMOVO_ONE_ITEM:
      return { ...state, loading: true, added: false };

    default:
      return state;
  }
}

export const Creators = {
  addCartRequest: prodId => ({
    type: Types.ADD_CART_REQUEST,
    payload: { prodId },
  }),

  addCartSuccess: data => ({
    type: Types.ADD_CART_SUCCESS,
    payload: { data },
  }),

  addCartFailure: error => ({
    type: Types.ADD_CART_FAILURE,
    payload: { error },
  }),

  reserAdded: () => ({
    type: Types.RESET_ADDED,
  }),

  removeCard: id => ({
    type: Types.REMOVE_CART,
    payload: { id },
  }),

  setQtdCard: (prodId, qtd) => ({
    type: Types.SET_QTD_CART,
    payload: { prodId, qtd },
  }),

  addOneItem: prodId => ({
    type: Types.ADD_ONE_ITEM,
    payload: { prodId },
  }),
  removeOneItem: prodId => ({
    type: Types.REMOVO_ONE_ITEM,
    payload: { prodId },
  }),
};
