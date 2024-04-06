import "./cardcss.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector} from 'react-redux'


export default function Card({ id, name, status, species, gender, origin, image, onClose}) {


   const  [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((state) => state.myFavorites)
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, status, species, gender, origin, image, onClose}))
      }
   } 


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className="cardHome">
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className="boton" onClick={() => onClose(id)}>X</button>
         <h2>ID: {id}</h2>
         <Link to={`/Detail/${id}`}>
            <h2>Name: {name}</h2>
         </Link>
         <h2>Status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
