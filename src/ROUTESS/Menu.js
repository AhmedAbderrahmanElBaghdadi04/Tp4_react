import React from 'react';
import { Link } from 'react-router-dom';
import '../ROUTESS/App.css'

export default function Menu() {
  return (
    <div>
        <center>
        <nav className='nav_menu'>
      <Link to='https://ahmedabderrahmanelbaghdadi04.github.io/Tp4_react/'  className='nav_Accueil'>Accueil</Link>
      <Link to='https://ahmedabderrahmanelbaghdadi04.github.io/Tp4_react/profil'  className='nav_Profil'>Profil</Link>
    </nav>
        </center>
    </div>
  )
}
