import React from "react";
import cartIcon from "../assets/statics/carrito.png";
import returnIcon from "../assets/statics/volver.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="cart">
        <img src={cartIcon} alt="" className="carritou" />
      </Link>
      <Link to="/">
        <img src={returnIcon} alt="" className="volver" />
      </Link>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
