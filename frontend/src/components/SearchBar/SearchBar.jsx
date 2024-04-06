import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id , setId]= useState("")


   const handelChange = (event)=>{
      setId(event.target.value)
   }

   const handleSearch = () =>{
      onSearch(id)
      setId("")
   }

   return (
      <div> 
         <input className="input" type='search' value={id} onChange={handelChange}/>
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}