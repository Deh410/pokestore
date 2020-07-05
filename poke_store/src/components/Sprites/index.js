import React, { Component } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import api from '../../services/api'
import './style.css'

class Sprites extends Component{
  state = {
    sprites: [{
      id: 0,
      name: '',
      image: '',
    }],
    offset: 0
  }

  async componentDidMount() {
    const sprites = await this.getSprites(this.state.offset)
    this.setState({
      sprites: [...sprites]
    })
  }

  async getSprites(offset = 0) {
    const { data } = await api.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=150`)
    const { results } = data
    let spritesArray = []
    
    for(let i = 0; i < 150; i++){
      const { name, url } = results[i]
      const { data } = await api.get(url)
      const { id, sprites } = data
      const { front_default } = sprites
      spritesArray.push({id, name, front_default})
    }
    return spritesArray
  }

  handleClick(props) {
    this.props.sendChanges(props)
  }

  render() {

    return(
      <Row>
        { this.state.sprites.map(images => (
          <Col sm={3} key={images.id}>
            <Card style={{borderRadius: '20px', backgroundColor: '#fafafa', marginBottom: '8px'}} id="Card" key={images.id}>
              <Card.Img variant="top" src={images.front_default} style={{width: '7rem', marginLeft: 'auto', marginRight: 'auto'}} />
              <Card.Body>
                <Card.Title style={{fontSize: 'calc(0.5em + 0.5vw)', fontWeight: 'bold'}}>{images.name}</Card.Title>
                <Button style={{fontSize: 'calc(0.3em + 0.3vw)'}} variant="primary"
                onClick={ () => this.handleClick(images) }
                >Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        )) }
      </Row>
    )
  }
}

export default Sprites