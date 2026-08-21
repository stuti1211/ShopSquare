import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";


function App(){

  const [search, setSearch] = useState("");
  const [cart,setCart] =useState([]);
  const [category, setCategory] = useState("All");
     return(
  <>
  <BrowserRouter>
   <Navbar search={search} setSearch={setSearch} cart={cart}  category={category} setCategory={setCategory}/>
  <Routes>
    <Route path="/" element={<Hero search={search} category={category} cart={cart}  setCart={setCart}/>} />
    <Route path="product/:id"  element={<ProductDetail cart={cart} setCart={setCart}/>} />
    <Route path="/cart" element={<Cart  cart={cart } setCart={setCart}/>} />
  </Routes>
  </BrowserRouter>
  </>
  );
} 

export default App;