import { createReducer } from '../../../helpers/redux';

import { FETCH_CURRENT_USER } from '../actions';

const initialState = null;

const handlers = {
  [FETCH_CURRENT_USER]: (state, { payload }) => {
      return payload.data || false;
  }
};

export default createReducer(initialState, handlers);