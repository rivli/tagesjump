import { LOAD_PRODUCTS, LOAD_MATERIALS } from "../actions/types";

export const loadProducts = () => async (dispatch) => {
  try {
    const res = await fetch("./dataStorage/items.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: LOAD_PRODUCTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadMaterials = () => async (dispatch) => {
  try {
    const res = await fetch("./dataStorage/materials.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    let dataObj = {};

    for (const dataItem of data) {
      dataObj[dataItem.id] = dataItem;
    }

    dispatch({
      type: LOAD_MATERIALS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
