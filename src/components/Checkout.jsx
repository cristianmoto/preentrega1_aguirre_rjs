import { useContext,  useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        } else if (email == "") {
            return false;
        } else if (telefono == "") {
            return false;
        }

        const buyer = {nombre:nombre, email:email, telephone:telefono};
        const items = cart.map(item => ({id:item.id, modelo:item.modelo, precio:item.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:currentDate, total:getSumProducts()};
        
       
        const db = getFirestore();
        const ordersCollection = collection(db, "pedidos");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });
    }

    if (getCountProducts() == 0 && !orderId) {
        return (
            <div className=" container mx-auto bg-slate-200 p-10 rounded-lg my-5">
                <div className="row">
                    <div className="col text-center my-3">
                        <h3 className="text-2xl my-3">No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className=" text-2xl my-5 rounded-lg p-2 text-slate-100 bg-slate-900 rounded-0 ">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className=" rounded-lg container mx-auto bg-slate-200 p-10 my-3">
            {!orderId ? 
            <div className="p-3">
                <div className=" ">
                    <form className="flex justify-between align-middle">
                        <div className="px-2 align-middle text-center ">
                            <label className="text-3xl px-6 pl-0">Nombre: </label>
                            <input type="text" className="form-control " onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="  content-between">
                            <label className="text-3xl px-6 pl-0">Email:</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="">
                            <label className="text-3xl px-6 pl-0">Teléfono:</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        
                        <button type="button" className=" bg-slate-900 rounded-lg text-white  flex-none  align-baseline text-end text-3xl px-6" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="w-full">
                    <table className="container mx-auto bg-slate-200 p-10 rounded-lg my-5">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} className=" container mx-auto justify-center">
                                    <td className="text-3xl px-6 pl-0 py-4"><img src={item.pic} alt={item.modelo} width={200} /></td>
                                    <td className="text-3xl px-6 pl-0">{item.modelo}</td>
                                    <td className="text-3xl px-6 pl-0">x{item.quantity}</td>
                                    <td className="text-3xl px-6 pl-0">${item.precio}</td>
                                </tr>
                            ))}
                            <tr className="text-center justify-between">
                                <td colSpan={2} className="text-end text-3xl px-6 "><b>Total</b></td>
                                <td className="text-end text-3xl px-6  "><b>-${getSumProducts()}-</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> : "" }
            <div className="container mx-auto bg-slate-200 p-10 rounded-lg my-5">
                <div className=" text-center">
                    {orderId ? <div className="text-2xl my-5" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                    <Link to={"/"} className=" text-2xl my-5 rounded-lg p-2 text-slate-100 bg-slate-900 rounded-0 ">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout;