import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_ARTWORK_SUCCESS = "FETCH_ARTWORK_SUCCESS";
export const fetchArtworkSuccess = (artwork) => ({
  type: FETCH_ARTWORK_SUCCESS,
  payload: artwork,
});

export const fetchArtwork = () => {
  return async (dispatch, getState) => {
    const artCount = getState().artwork.length;
    const response = await axios.get(
      `${apiUrl}/artwork?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${artCount}`
    );

    console.log("response.data", response.data);
    dispatch(fetchArtworkSuccess(response.data));
  };
};
