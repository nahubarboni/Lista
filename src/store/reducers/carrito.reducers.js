import { carritoTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";

import List from "../../components/models/list";
import { AddItem } from "../../components/index";

const { AGREGAR, ELIMINAR, AGREGAR_LISTA } = carritoTypes;

const initialState = {
  carrito: [],
  selected: [],
  list: [],
};

const listSlice = createSlice({
  name: "lista",
  initialState,
  reducers: {
    addLista: (state, action) => {
      const newLista = new List(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newLista);
    },
    getLista: (state, action) => {
      state.places = action.payload;

    }
  },
});

export const { addLista, getLista } = listSlice.actions;


const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR:
      return {
        ...state,
        carrito: [
          ...state.carrito,
          { id: action.payload.length * Math.random(), value: action.payload },
        ],
      };
    case ELIMINAR:
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== action.payload),
      };
    case AGREGAR_LISTA:
      const newList = new List(action.payload);
      return {
        ...state,
        list: [...state.list, newList],
      };
    default:
      return state;
  }
};

export default carritoReducer;
