import { createReducer } from '../../../helpers/redux';

import { FETCH_ADMINS } from '../actions';

const initialState = [];


const handlers = {
  [FETCH_ADMINS]: (state, { payload }) => {
      return payload.data;
  }
};

export default createReducer(initialState, handlers);