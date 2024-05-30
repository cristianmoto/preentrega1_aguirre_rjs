import { Link } from "react-router-dom";
import cart from "../assets/cart3.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getCountProducts } = useContext(CartContext);

  if (getCountProducts() > 0) {
    return (
      <Link to={"/cart"} className=" position-relative">
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-slate-950 bg-slate-500 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-slate-500 dark:hover:bg-slate-250 dark:focus:ring-blue-800"
        >
          <img src={cart} alt="Carrito" width={24} />
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-slate-200 rounded-full">
            {getCountProducts()}
          </span>
        </button>
      </Link>
    );
  }
};

export default CartWidget;
