import React, { useState } from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap'

function App() {
  const [cartShow, setCartShow] = useState(false)


  window.onresize = () => {
    let width = getWidth() 
    if(width >= 577) {
      notShowButtons()
    }else{
      showButtons()
    }
  }

  function getWidth() {
    return document.getElementById('navbar').offsetWidth;
  }

  function showButtons() {
    // TODO: Bug quando width == 576
    document.getElementById("cart-content").style.cssText = "display: none"
    if(cartShow){
      document.getElementById("cart-button").style.cssText = "display: none"
      document.getElementById("cart-back").style.cssText = "display: inline-block"
    } else{
      document.getElementById("cart-button").style.cssText = "display: inline-block"
      document.getElementById("cart-back").style.cssText = "display: none"
    }
  }

  function notShowButtons() {
    document.getElementById("cart-content").style.cssText = "display: inline-block"
    document.getElementById("cart-button").style.cssText = "display: none"
    document.getElementById("cart-back").style.cssText = "display: none"
  }

  function hideButton() {
    document.getElementById("cart-content").style.cssText = "height: auto"
    document.getElementById("cart-button").style.cssText = "display: inline-block"
    document.getElementById("cart-back").style.cssText = "display: none"
  }

  function showButton() {
    document.getElementById("cart-content").style.cssText = "height: 100vh"
    document.getElementById("cart-button").style.cssText = "display: none"
    document.getElementById("cart-back").style.cssText = "display: inline-block"
  }

  function handleCart() {
    console.log('cartShow', cartShow)
    if(cartShow){
      setCartShow(false)
      hideButton()
    }else{
      setCartShow(true)
      showButton()
    }
  }

  return (
    <div className="App">
      <Navbar id="navbar" expand="sm" style={{justifyContent: 'space-between'}}>
        <Navbar.Brand id = "NavBrand" href="#home">PokeStore</Navbar.Brand>
        <Form inline id="form">
          <FormControl type="text" placeholder="Pokemon" />
          <Button id="form-button" variant="primary">Buscar</Button>
        </Form>
      </Navbar>
      <div>
        <Row>
          <Col sm={8} style={{backgroundColor: '#00ffff', textAlign: 'center', height: '100vh'}}>
            <h5>Catálogo de Pokémon</h5>
          </Col>
          <Col sm={4} id="carrinho"  style={{backgroundColor: '#ff00ff'}}>
            <div id="cart-content">
              <h5>Carrinho</h5>
              <Button className="btn-block w-100 btn-group" id="cart-back" onClick={handleCart} >Voltar</Button>
            </div>
            <Button className="btn-block w-100 btn-group" id="cart-button" onClick={handleCart}>Carrinho</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
