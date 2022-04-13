import React from "react";
import CartItem from "../components/CartItem";
import "../assets/css/Cart.css";
import { useContext } from "react";
import Context from "../context/Context";

export default function Cart() {
  const { cart, deleteCart } = useContext(Context);
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {cart.map((item, i) => (
            <CartItem {...item} key={i} deleteCart={deleteCart}></CartItem>
          ))}
        </div>
        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
