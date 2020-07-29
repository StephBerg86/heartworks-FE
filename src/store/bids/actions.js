import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_ARTWORK_DETAILS = "FETCH_ARTWORK_DETAILS";
export const fetchArtworkDetails = (artwork) => ({
  type: FETCH_ARTWORK_DETAILS,
  payload: artwork,
});

export const fetchArtworkById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/artwork/${id}`);
    console.log("response data deze", response.data.artwork);
    dispatch(fetchArtworkDetails(response.data.artwork));
  };
};
