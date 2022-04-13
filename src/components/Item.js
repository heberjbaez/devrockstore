import React, { useContext } from "react";
import img from "../assets/statics/0.png";
import "../assets/css/Item.css";
import Context from "../context/Context";

export default function Item(props) {
  const { nombre, precio, medidas, img, descripcion, id } = props;
  const { setCart } = useContext(Context);
  return (
    <>
      <div className="home-item">
        <img src={img} alt="" className="home-item-img" />
        <div className="home-item-info">
          <a href="producto.html">
            <h3 className="home-item-titulo">{nombre}</h3>
          </a>
          <p className="home-item-medidas">{medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ {precio}</h3>
            <button
              className="home-item-comprar"
              onClick={() => {
                setCart(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
