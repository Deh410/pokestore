import React from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar id="navbar" expand="sm" style={{justifyContent: 'space-between'}}>
        <Navbar.Brand id = "NavBrand" href="#home">PokeStore</Navbar.Brand>
        <Form inline id="form">
          <FormControl type="text" placeholder="Pokemon" />
          <Button id="form-button" variant="dark">Buscar</Button>
        </Form>
      </Navbar>
      <body>
        <Row>
          <Col sm={8} style={{backgroundColor: '#00ffff', textAlign: 'center', height: '100vh'}}>
            <h5>Catálogo de Pokémon</h5>
          </Col>
          <Col sm={4} id="carrinho"  style={{backgroundColor: '#ff00ff'}}>
            <h5>Carrinho</h5>
          </Col>
        </Row>
      </body>
    </div>
  );
}

export default App;
