import Home from "../containers/Home";
import Products from "../containers/Products";
import Cart from "../containers/Cart";
import Layout from "../components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseContext from "../context/UseContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}

export default App;
