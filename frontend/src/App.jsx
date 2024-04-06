
//componentes to render//
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorite from './components/favorite/Favorite.jsx';

//hooks
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

//dependencias//
import axios from "axios";

//style//
import "./app.css"


const EMAIL = 'nicopaez@gmail.com';
const PASSWORD = 'hola123'


function App() {
const [characters, setCharacters]=useState([])
const {pathname} = useLocation()
const navigate = useNavigate();
const [access, setAccess] = useState(false);


const onSearch = async (id)=> {
   try {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert (`${characterId[0].name} ya existe!`)
      }

      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
                  if (data.name) {
                     setCharacters((oldChars) => [...oldChars, data]);
                  } else {
                     alert('¡No hay personajes con este ID!');
                  }
   } catch (error) {
         throw Error(error.message)
   }
} 

const onClose = (id) =>{
   setCharacters(
      characters.filter((char)=>{
         return char.id !== Number(id)
      })
   )
}


async function login(userData) {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
   } catch (error) {
   throw Error(error.message)
   }

}
useEffect(() => {
   !access && navigate('/');
}, [access]);


const logout = () => {
   setAccess(false)
} 



   return (
      <div className='App'>
         {pathname !== "/" && <NavBar onSearch={onSearch} logout={logout}/>}
         <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorite/>}/>
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
      </div>
   );
}

export default App;
