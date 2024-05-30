import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();

    
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "autos", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id]);
  return (
    <div className="flex gap-2 m-2  bg-slate-300 rounded-md  container mx-auto">
      <div>
        <div>
        {visible ? <Loading /> : <ItemDetail item={item} />}
        </div>
      </div>
    </div>
  );
};
export default ItemDetailContainer;