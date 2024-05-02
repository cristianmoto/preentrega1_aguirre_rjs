import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import autos from "../json/autos.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {

   const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      const promesa = new Promise(resolve => {
          setTimeout(() => {
        const producto = autos.find(item => item.id == id);
        resolve(producto);
      }, 500);
    });
    promesa.then(respuesta => {
      setItem(respuesta);
  })
}, [id])
  return (
    <div className="flex gap-2 m-2  bg-slate-300 rounded-md  container mx-auto">
      <div>
        <div>
          <ItemDetail item={item} />
        </div>
      </div>
    </div>
  );
};
