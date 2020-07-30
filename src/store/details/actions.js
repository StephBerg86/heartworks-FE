import axios from "axios";
import { apiUrl } from "../../config/constants";

export const FETCH_ARTWORK_DETAILS = "FETCH_ARTWORK_DETAILS";
const fetchArtworkDetails = (artwork) => ({
  type: FETCH_ARTWORK_DETAILS,
  payload: artwork,
});

export const FETCH_HEARTS = "FETCH_HEARTS";
const fetchHearts = (hearts) => ({
  type: FETCH_HEARTS,
  payload: hearts,
});

export const INCREMENT_HEARTS = "INCREMENT_HEARTS";
export const incrementHearts = (hearts) => ({
  type: INCREMENT_HEARTS,
  payload: hearts,
});

export const fetchedHearts = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/artwork/${id}/hearts`);
    console.log("response data hearts", response.data.art.hearts);
    dispatch(fetchHearts(response.data.art.hearts));
    dispatch(incrementHearts(response.data.art.hearts));
  };
};

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artwork/${id}`);
    dispatch(fetchArtworkDetails(response.data.artwork));
  };
};
