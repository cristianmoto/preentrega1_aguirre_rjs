import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Error404 from "./components/Error404"
import Checkout from "./components/Checkout";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartContextProvider>

      
    
    </>
  );
}

export default App;
