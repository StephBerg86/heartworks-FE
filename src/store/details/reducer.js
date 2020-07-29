import { FETCH_ARTWORK_DETAILS, FETCH_HEARTS } from "./actions";

const initialState = {
  bids: [],
};

export default (state = initialState, action) => {
  console.log("a p.", action.payload);
  switch (action.type) {
    case FETCH_ARTWORK_DETAILS:
      return { ...state, ...action.payload, bids: [...action.payload.bids] };
    case FETCH_HEARTS:
      return {
        ...state,
        ...action.payload,
        hearts: [...action.payload.hearts],
      };
    default:
      return state;
  }
};
