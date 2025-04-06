import api from "../../utils";
import ActionTypes from "../actionTypes";

// api'dan izleme listesindeki elemanları alıp reducer'a ileten fonks.

const getWatchList = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LIST_LOADING });

    api.get(`/account/21861021/watchlist/movies`)
      .then((res) => {
        dispatch({
          type: ActionTypes.LIST_SUCCESS,
          payload: res.data.results,
        });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message });
      });
  };
};


// film izleme listesine film ekleme çıkarma işlemi yap
const toggleList = (movie, isAdd) => {
  return (dispatch) => {
    const body = {
      media_type: "movie",
      media_id: movie.id,
      watchlist: isAdd,
    };

    api.post(`/account/21861021/watchlist`, body)
      .then(() => {
        dispatch({
          type: isAdd ? ActionTypes.ADD_TO_LIST : ActionTypes.REMOVE_FROM_LIST,
          payload: movie,
        });
      })
      .catch((err) => {
        dispatch({ type: ActionTypes.LIST_ERROR, payload: err.message });
      });
  };
};

export { getWatchList, toggleList };