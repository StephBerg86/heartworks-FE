import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  ART_POST_SUCCESS,
  POST_BID_SUCCESS,
} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  isArtist: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case ART_POST_SUCCESS:
      return {
        ...state,
        artwork: {
          ...state.artwork,
          bids: [...state.artwork.bids, action.payload],
        },
      };
    case POST_BID_SUCCESS:
      return {
        ...state,
        artwork: {
          ...state.artwork,
          bids: [...state.artwork.bids, action.payload],
        },
      };
    default:
      return state;
  }
};
