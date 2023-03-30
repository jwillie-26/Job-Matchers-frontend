import React, {useEffect,useState} from 'react'
import { SiAirplayvideo } from "react-icons/si";

function Categories() {
  const [categoriess,setCategoriess ] =useState ([]);
  

  useEffect(() => {
    fetch("https://careerconnect-production.up.railway.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoriess(data);
         });
  }, []);
    

  return (

    <div className='bg-gray-50'>
        <div>
            <h1 className='flex justify-center font-semibold text-3xl pt-10'>Popular Categories</h1>
        </div>
        <div className='flex  flex-wrap justify-center gap-5 mt-20 pb-28'>
        
{categoriess.map((categories) => (
<a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl w-64 h-48 bg-white"
  href=""
>
<div className='h-28 flex justify-center '><SiAirplayvideo className='h-20 w-20 text-gray-600'/></div>

  <div className=" text-gray-500 sm:pr-8 flex justify-center" key={categories.id}>
    
    
    <h3 className=" text-lg font-semibold text-black flex ml-6">{categories.name}</h3>

  </div>
</a>
))}





        </div>
    </div>
  )
}

export default Categories