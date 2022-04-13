import Context from "./Context";

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useReducer } from "react";
import Reducer from "./Reducer";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";

export default function UseContext(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyAAIa9ywJObuVXcohd25J2gsGDAWfkKwto",
    authDomain: "dev-rock-store.firebaseapp.com",
    projectId: "dev-rock-store",
    storageBucket: "dev-rock-store.appspot.com",
    messagingSenderId: "796344201970",
    appId: "1:796344201970:web:0ff517665b463b624c966b",
  };
  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const reference = ref(db, "products/");

  const { children } = props;
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    // const res = await axios.get(
    //   "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    // );
    // dispatch({ type: "GET_PRODUCTS", payload: res.data });

    onValue(reference, (snap) => {
      dispatch({ type: "GET_PRODUCTS", payload: snap.val() });
    });
  };

  const setCart = (item) => {
    console.log("Producto: ", item);
    dispatch({ type: "SET_CART", payload: item });
  };

  const deleteCart = (item) => {
    console.log("Eliminar carrito", item);
    dispatch({ type: "DELETE_CART", payload: item });
  };

  return (
    <Context.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        setCart,
        deleteCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
