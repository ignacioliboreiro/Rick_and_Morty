import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import "./NavBarCSS.css"


const NavBar = ({onSearch, logout}) => {
    return ( 
        <div className='navbar'>
            <SearchBar onSearch={onSearch} />
            <div>
            <button className='botonNavBar' onClick={logout} >logout</button>
            <Link to="/about"><button className='botonNavBar' >About</button></Link>
            <Link to="/favorites"><button  className='botonNavBar'>Favorites</button></Link>
            <Link to="/home"><button  className='botonNavBar'>Home</button></Link>
            </div>
        </div>
    )
}

export default NavBar