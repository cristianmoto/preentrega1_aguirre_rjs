import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="  bg-slate-200 col-md-3 text-center shadow-lg border-2 rounded-md ">
            <Link to={"/item/" + item.id} className="container mx-auto ">
                <div  className="container mx-auto ">
                 <img src={item.pic} className="img-fluid" alt={item.nombre} />
                    <div >
                    <p className=" text-black font-bold text-xl">{item.marca}</p>
                        <p >{item.modelo}<br /><span ><b>${item.precio}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;