import { createReducer } from '../../../helpers/redux';

import { FETCH_USERS } from '../actions';

const initialState = [];

const handlers = {
  [FETCH_USERS]: (state, { payload }) => {
      return payload.data;
  }
};

export default createReducer(initialState, handlers);