
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";


export const ItemDetail = ({item}) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (cantidad) => {
      addItem(item, cantidad);
      console.log("Agregaste: " + cantidad + " productos!");
  }
  return (
   
      <article className="flex   bg-slate-200 col-md-3 text-center shadow-lg border-2 rounded-md ">
    
        <div className="px-6 py-4 flex-none sm:flex">
        <div>
        <img className="w-[450px]  flex-none  p-1 sm:w-[600px]" src={item.pic} />
        </div>
       <div>
        <h1 className="font-bold mb-[18px] px-5 text-xl sm:text-5xl"> Marca: {item.marca}</h1>
          <h3 className=" text-black-500 font-semibold  px-5 text-lg sm:text-3xl">Modelo: {item.modelo}</h3>
          <h3 className=" text-gray-800 font-semibold text-lg px-5 py-2 sm:text-2xl">Categoria: {item.categoria}</h3>
          <h3 className=" text-gray-800 font-semibold text-lg px-5 py-2 sm:text-2xl"> Año: {item.año}</h3>
          <h3 className=" text-gray-800 font-semibold text-lg px-5 py-2 sm:text-2xl">Km: {item.km}</h3>
          <h3 className=" text-gray-800 font-semibold text-lg px-5 py-2 sm:text-2xl" >Unidades: {item.stock}</h3>
          <h3 className=" text-gray-800 font-semibold text-lg px-5 py-2 sm:text-2xl">Estado: {item.estado}</h3>
          <h2 className=" text-gray-950 font-semibold  text-xl px-5 py-2 sm:text-3xl">Precio:$ {item.precio}</h2>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
        </div>
      </article>
   
  );
}


