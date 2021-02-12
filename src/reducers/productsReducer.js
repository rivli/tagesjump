import { LOAD_PRODUCTS, LOAD_MATERIALS } from "../actions/types";

const initialState = {
  items: [],
  materials: {},
};

export default function foo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, items: [...payload] };
    case LOAD_MATERIALS:
      return { ...state, materials: { ...payload } };
    default:
      return state;
  }
}
