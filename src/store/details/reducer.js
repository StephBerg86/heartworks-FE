import {
  FETCH_ARTWORK_DETAILS,
  FETCH_HEARTS,
  INCREMENT_HEARTS,
} from "./actions";

const initialState = {
  hearts: 0,
  bids: [],
};

export default (state = initialState, action) => {
  console.log("action.p.", action.payload);
  switch (action.type) {
    case FETCH_ARTWORK_DETAILS:
      return { ...state, ...action.payload, bids: [...action.payload.bids] };
    case FETCH_HEARTS:
      return {
        ...state,
        ...action.payload,
      };
    case INCREMENT_HEARTS:
      return { ...state, hearts: action.payload + 1 };
    default:
      return state;
  }
};

//hearts: state.hearts + 1
