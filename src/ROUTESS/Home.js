import React, { useEffect, useState } from 'react'

function Home() {

    const [srcim,setSrcim] = useState('');

    


useEffect(()=>{
    fetch(`https://api.thecatapi.com/v1/images/search`).then(response=>{
        return (response.json())
    }).then(data=>{
        setSrcim(data[0].url) 
    })
},[])
    
  return (
    <div>
      <h1>Exemple useEffect Call API : </h1>

    <img src={srcim} alt="" />
    </div>
  )
}

export default Home
