import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from "../actions/types";
/*
localStorage.removeItem("cart");
localStorage.removeItem("favorites");*/

const cart = localStorage.cart ? JSON.parse(localStorage.cart) : {};
const favorites = localStorage.favorites
  ? JSON.parse(localStorage.favorites)
  : {};

const initialState = {
  cart,
  favorites,
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      var newCart = state.cart;
      newCart[payload.id] = payload;
      return { ...state, cart: { ...newCart } };
    case REMOVE_FROM_CART:
      newCart = state.cart;
      delete newCart[payload];
      return { ...state, cart: { ...newCart } };
    case ADD_TO_FAVORITES:
      var newFavorites = state.favorites;
      newFavorites[payload.id] = payload;
      return { ...state, favorites: { ...newFavorites } };
    case REMOVE_FROM_FAVORITES:
      newFavorites = state.favorites;
      delete newFavorites[payload];
      return { ...state, favorites: { ...newFavorites } };
    default:
      return state;
  }
}
