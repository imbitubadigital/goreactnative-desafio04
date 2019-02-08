import Immutalble from 'seamless-immutable';

export const Types = {
  GET_REQUEST: 'categories/GET_REQUEST',
  GET_SUCCESS: 'categories/GET_SUCCESS',
  GET_FAILURE: 'categories/GET_FAILURE',
};

const INITIAL_STATE = Immutalble({
  data: [],
  loading: false,
  error: null,
});

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };

    case Types.GET_SUCCESS:
      return { data: action.payload.data, loading: false, error: null };

    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  getCategoriesRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getCategoriesSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getCategoriesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
