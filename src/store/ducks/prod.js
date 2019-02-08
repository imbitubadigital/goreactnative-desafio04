import Immutalble from 'seamless-immutable';

export const Types = {
  REQUEST: 'prod/REQUEST',
  SUCCESS: 'prod/SUCCESS',
  FAILURE: 'prod/FAILURE',
};

const INITIAL_STATE = Immutalble({
  data: {},
  loading: false,
  error: null,
});

export default function getProd(state = INITIAL_STATE, action) {
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
  prodRequest: prodId => ({
    type: Types.REQUEST,
    payload: { prodId },
  }),

  prodSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),

  prodFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
