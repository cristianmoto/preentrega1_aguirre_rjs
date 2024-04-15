

export const Item = ({titulo, text}) => {
  return (
   <article className=' bg-gray-300 m-10  w-[250px] h-[162px] p-3 align-text 	rounded-lg flex justify-center'>
   <h1 className="font-bold mb-[18px] ">{titulo}</h1>
    <h2 className=' text-gray-500 font-semibold'>{text}</h2>
   </article>
  )
}


