
import { ItemCount } from "./ItemCount"


export const ItemDetail = ({item}) => {
  return (
   
      <article className="gap-2 m-2  bg-slate-300 rounded-md flex sm:flex">
    
        <div className="px-6 py-4">
        <img className="w-[850px] h-[600px]  p-1 " src={item.pic} />
        <h1 className="font-bold mb-[18px] "> Marca: {item.marca}</h1>
          <h3 className=" text-black-500 font-semibold text-sm">Modelo: {item.modelo}</h3>
          <h3 className=" text-gray-800 font-semibold text-sm">Categoria: {item.categoria}</h3>
          <h3 className=" text-gray-800 font-semibold text-sm"> Año: {item.año}</h3>
          <h3 className=" text-gray-800 font-semibold text-sm">Km: {item.km}</h3>
          <h3 className=" text-gray-800 font-semibold text-sm">Unidades: {item.stock}</h3>
          <h3 className=" text-gray-800 font-semibold text-sm">Estado: {item.estado}</h3>
          <h2 className=" text-gray-950 font-semibold  text-2xl">Precio:$ {item.precio}</h2>
          <ItemCount stock={item.stock}/>
        </div>
       
      </article>
   
  );
}


