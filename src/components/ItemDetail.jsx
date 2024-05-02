
import { ItemCount } from "./ItemCount"


export const ItemDetail = ({item}) => {
  return (
   
      <article className="flex   bg-slate-200 col-md-3 text-center shadow-lg border-2 rounded-md ">
    
        <div className="px-6 py-4 flex">
        <div>
        <img className="w-auto h-[600px]  p-1 " src={item.pic} />
        </div>
       <div>
        <h1 className="font-bold mb-[18px] px-5 text-5xl"> Marca: {item.marca}</h1>
          <h3 className=" text-black-500 font-semibold  px-5 text-3xl">Modelo: {item.modelo}</h3>
          <h3 className=" text-gray-800 font-semibold text-2xl px-5 py-2">Categoria: {item.categoria}</h3>
          <h3 className=" text-gray-800 font-semibold text-2xl px-5 py-2"> Año: {item.año}</h3>
          <h3 className=" text-gray-800 font-semibold text-2xl px-5 py-2">Km: {item.km}</h3>
          <h3 className=" text-gray-800 font-semibold text-2xl px-5 py-2" >Unidades: {item.stock}</h3>
          <h3 className=" text-gray-800 font-semibold text-2xl px-5 py-2">Estado: {item.estado}</h3>
          <h2 className=" text-gray-950 font-semibold  text-3xl px-5 py-2">Precio:$ {item.precio}</h2>
          <ItemCount stock={item.stock} />
        </div>
        </div>
      </article>
   
  );
}


