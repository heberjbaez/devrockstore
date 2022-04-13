import React from "react";
import "../assets/css/CartItem.css";
import deleteImg from "../assets/statics/borrar.png";

export default function CartItem(props) {
  const { nombre, precio, img, id, deleteCart } = props[0];
  const handleDelete = () => {
    props.deleteCart(id);
  };
  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">AR$ {precio}</h3>
        </div>
        <img
          src={deleteImg}
          alt=""
          className="carrito-item-borrar"
          onClick={handleDelete}
        />
      </div>
    </>
  );
}
