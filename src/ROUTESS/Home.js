import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 // Ajoutez un fichier CSS pour vos styles personnalisés si nécessaire

function Home() {
  const [srcim, setSrcim] = useState('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSrcim(data[0].url);
      });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center">Exemple useEffect Call API : </h1>
      <img src={srcim} alt="" className="img_cats img-fluid img-center" />
    </Container>
  );
}

export default Home;
