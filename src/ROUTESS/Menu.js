import React from 'react';
import { Link } from 'react-router-dom';
import '../ROUTESS/App.css'

export default function Menu() {
  return (
    <div>
        <center>
        <nav className='nav_menu'>
      <Link to='/'  className='nav_Accueil'>Accueil</Link>
      <Link to='/profil'  className='nav_Profil'>Profil</Link>
    </nav>
        </center>
    </div>
  )
}
