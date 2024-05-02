import { useEffect, useState } from "react"



export const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar =()=>{
        if(contador < itemStock){
            setContador(contador+1);
        }
    }
    const decrementar =()=>{
        if(contador > 1){
            setContador(contador-1);
        }
    }

    const onAdd = () =>{
        if (contador <= itemStock){
            setItemStock (itemStock - contador);
            setContador(1);
            console.log("agregaste " + contador + "autos");
        }
    }


    useEffect(()=>{
        setItemStock(stock)
    }, [stock])

  return (
    <div>
    <div className="grid grid-flow-row px-5 py-2">
        <div>
          
            <div>
                <button type="button" className= " text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 font-medium rounded-sm text-sm w-[40px] h-6   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase" onClick={decrementar}>-</button>
                <button type="button" className="my-2 w-[70px] h-6 bg-slate-50">{contador}</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 font-medium rounded-sm text-sm  w-[40px]  h-6  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase" onClick={incrementar}>+</button>


            </div>
        </div>
    </div>
    <div>
    <button type="button" className="text-white ml-5  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase" onClick={onAdd}>Agregar</button>
    </div>
    </div>
  )
}
