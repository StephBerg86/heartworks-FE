import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_ARTWORK_DETAILS = "FETCH_ARTWORK_DETAILS";
const fetchArtworkDetails = (artwork) => ({
  type: FETCH_ARTWORK_DETAILS,
  payload: artwork,
});

export const FETCH_HEARTS = "FETCH_HEARTS";
const fetchHearts = (heart) => ({
  type: FETCH_HEARTS,
  payload: heart,
});

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artwork/${id}`);
    dispatch(fetchArtworkDetails(response.data.artwork));
  };
};

export const fetchedHearts = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/artwork/${id}`);
    console.log("response data hearts", response.data.hearts);
    dispatch(fetchHearts(response.data.hearts));
  };
};
