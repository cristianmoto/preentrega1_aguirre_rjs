import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();

  
    useEffect(() => {
        const db = getFirestore();
        const autosCollection = collection(db, "autos");
        const queryCollection = id ? query(autosCollection, where("categoria", "==", id)) : autosCollection;
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setVisible(false);
            }
        });
    }, [id]);


  return (
  
      <div className=" container mx-auto my-6">
        <div  className="grid grid-cols-3  gap-4  flex-wrap">
        {visible ? <Loading /> : <ItemList items={items} />}
          
        </div>
      </div>
 
  );
};
