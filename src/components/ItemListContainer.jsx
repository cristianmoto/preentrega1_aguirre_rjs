import { useState, useEffect } from "react";
import autos from "../json/autos.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {id}  =useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res( id ? autos.filter (item => item.categoria == id): autos);
      }, 800);
    });
    promesa.then((res) => {
      setItems(res);
    });
  }, [id]);


  return (
  
      <div className=" container mx-auto my-6">
        <div  className="grid grid-cols-3  gap-4  flex-wrap">
          <ItemList items={items} />
          
        </div>
      </div>
 
  );
};
