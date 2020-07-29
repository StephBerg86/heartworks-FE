import { FETCH_ARTWORK_DETAILS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  console.log("a p.", action.payload);
  switch (action.type) {
    case FETCH_ARTWORK_DETAILS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
