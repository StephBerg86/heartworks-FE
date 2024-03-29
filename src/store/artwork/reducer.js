import { FETCH_ARTWORK_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTWORK_SUCCESS:
      return [...state, ...action.payload.rows];
    default:
      return state;
  }
};
