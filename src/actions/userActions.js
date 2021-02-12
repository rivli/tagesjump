import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/types";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};

export const removeFromCart = (productID) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productID,
  });
};

export const addToFavorites = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITES,
    payload: product,
  });
};

export const removeFromFavorites = (productID) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVORITES,
    payload: productID,
  });
};
