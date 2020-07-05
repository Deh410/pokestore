import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap'
import Sprites from './components/Sprites'
import Carrinho from './components/Carrinho'


function App() {
  const [cartShow, setCartShow] = useState(false)
  const [toCart, setToCart] = useState('')

  useEffect(() => {
    let width = getWidth()
    if(width >= 577) {
      notShowButtons()
    }else{
      hideButton()
    }
    
  }, [])

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
    document.getElementById("cart-content").style.cssText = "display: none"
    document.getElementById("cart-button").style.cssText = "display: inline-block"
    document.getElementById("cart-back").style.cssText = "display: none"
  }

  function showButton() {
    document.getElementById("cart-content").style.cssText = "height: 100vh"
    document.getElementById("cart-button").style.cssText = "display: none"
    document.getElementById("cart-back").style.cssText = "display: inline-block"
  }

  function handleCart() {
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
      <Navbar id="navbar" expand="sm" style={{justifyContent: 'space-between', marginBottom: '8px'}}>
        <Navbar.Brand id = "NavBrand" href="#home">PokeStore</Navbar.Brand>
        {/* <Form inline id="form">
          <FormControl type="text" placeholder="Pokemon" />
          <Button id="form-button" variant="primary">Buscar</Button>
        </Form> */}
      </Navbar>
      <div>
        <Row>
          <Col sm={8} style={{backgroundColor: '#fafafa', textAlign: 'center', height: 'auto', overflowY:'hidden'}}>
            <Sprites sendChanges={setToCart}/>
          </Col>
          <Col sm={4} id="carrinho"  style={{backgroundColor: '#fafafa'}}>
            <div id="cart-content">
              <Carrinho id="item-carrinho" props={toCart}/>
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
