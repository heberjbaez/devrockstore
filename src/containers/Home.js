import React from "react";
import "../assets/css/Home.css";
import Item from "../components/Item";
import { useContext } from "react";
import { useEffect } from "react";
import Context from "../context/Context";

export default function Home() {
  useEffect(() => {
    getProducts();
  }, []);
  const { getProducts, products } = useContext(Context);
  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {products.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
