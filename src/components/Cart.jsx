import cart from "../assets/cart3.svg";

const Cart = () => {
    return (
      <div className="flex pr-5 pt-2">
        <button type="button" className="btn btn-primary relative">
          <div className="flex items-center">
            <img className="w-12" src={cart} alt="carrito" />
            <span className="absolute top-0 right-0 bg-red-500 text-white font-semibold px-2 py-1 rounded-full">5</span>
          </div>
        </button>
      </div>
    )
  }

export default Cart