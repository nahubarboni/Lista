import { carritoTypes } from "../types";
import { getLista, insertLista } from "../../db";

const { AGREGAR, ELIMINAR, AGREGAR_LISTA } = carritoTypes;

import { URL_GEOCODING } from "../../utils/map";
import { addLista } from "../reducers/carrito.reducers";

export const agregarItem = (item) => ({
  type: AGREGAR,
  payload: item,
});

export const eliminarItem = (offItem) => ({
  type: ELIMINAR,
  payload: offItem,
});

export const agregarLista = (image) => ({
  type: AGREGAR_LISTA,
  payload: image,
});

export const saveLista = (title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

    if (response.ok) throw new Error("No se ha podido conectar con el servidor");

    const data = await response.json();

    if (!data.results) throw new Error("No se ha podido conectar con el servidor");

    const address = data.results[0].formatted_address;
    try {
      const result = await insertLista(title, image, address, coords);
      dispatch(addLista({ id: result.insertId, title, image, address, coords }));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};

export const loadLista = () => {
  return async (dispatch) => {
    try {
      const result = await getLista();
      dispatch(getLista(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};
