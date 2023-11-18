import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './ROUTESS/Menu';
import Home from './ROUTESS/Home';
import Profil from './ROUTESS/Profil';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez correctement le fichier CSS Bootstrap

export default function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} xl={12} xxl={10} lg={12}>
            <Menu />
          </Col>
          <Col xxs={12} sm={12} xl={12} xxl={10} lg={12}>
            <br /><br />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profil' element={<Profil />} />
                <Route path='*' element={<><h1>404</h1></>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
