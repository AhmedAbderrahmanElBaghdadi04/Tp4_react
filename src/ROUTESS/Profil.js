import React, { useEffect, useState } from 'react';
import '../ROUTESS/App.css'

function Profil() {
  const [arrfile,setArrfile]=useState(['']);

useEffect(()=>{
    fetch('https://archive.org/metadata/TheAdventuresOfTomSawyer_201303').then(response=>{
        return(response.json())
    }).then(data=>{
      setArrfile(data.files)
    })
},[])


  return (
    <div>
      <h1>Exemple API return Array</h1>
<ul>

{arrfile.map((el)=>{

return <li>{el.format} +++ {el.name}</li>

})}
</ul>
 </div>
 );
}

export default Profil