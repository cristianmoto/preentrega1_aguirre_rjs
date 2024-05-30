import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash2.svg";

const Cart = () => {
  const {
    cart,
    removeItem,
    clear,
    getCountProducts,
    getSumProducts,
  } = useContext(CartContext);

  if (getCountProducts() == 0) {
    return (
      <div className=" container mx-auto bg-slate-200 p-10 rounded-lg my-5">
      <div className="row">
          <div className="col text-center my-3">
              <h3 className="text-2xl my-3">No se encontraron Productos en el Carrito!</h3>
              <Link to={"/"} className=" text-2xl my-5 rounded-lg p-2 text-slate-100 bg-slate-900 rounded-0 ">Volver a la Página Principal</Link>
          </div>
      </div>
  </div>
      
    );
  }

  return (
    <article className="flex   bg-slate-200 col-md-3  shadow-lg border-2 rounded-md  container mx-auto    ">
      <div className="px-6 py-4  w-full ">
        
          <tbody  className="text-end  w-full">
            <tr className="text-end w-full">
              <td colSpan={6} className="text-end w-full">
                <button
                  className="btn bg-dark rounded-0 text-zinc-950 text-3xl text-center"
                  onClick={clear}
                >
                  Vaciar Carrito
                </button>
              </td>
            </tr>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.pic} alt={item.nombre} width={250} />
                </td>
                <td className="align-middle text-end text-3xl px-6">{item.modelo}</td>
                <td className="align-middle text-end text-3xl px-6">${item.precio}</td>
                <td className="align-middle text-end text-3xl px-6">x{item.quantity}</td>
                <td className="align-middle text-end text-3xl px-6">
                  ${item.quantity * item.precio}
                </td>
                <td className="align-middle text-end text-3xl pl-[250px]">
                  <img
                    src={trash}
                    width={24}
                    alt="Eliminar Producto"
                    title="Eliminar Producto"
                    onClick={() => {
                      removeItem(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4} className="text-center text-3xl">
                <b>Total</b>
              </td>
              <td className="text-center text-3xl">
                <b>${getSumProducts()}</b>
              </td>
             
            </tr>
            <tr> 
            <td className="text-end ">
                <Link
                  to={"/checkout"}
                  className=" bg-slate-900 rounded-lg text-white text-3xl  rounded-0 px-4"
                >
                  Checkout
                </Link>
              </td>
            </tr>
          </tbody>
        </div>
     
    </article>
  );
};

export default Cart;
