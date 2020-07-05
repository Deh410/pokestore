import React, { Component, useState } from 'react'
import { Image } from 'react-bootstrap'
import api from '../../services/api'

class Sprites extends Component{
  state = {
    sprites: [],
    offset: 0
  }

  async componentDidMount() {
    this.state.sprites = [
      this.getSprites(this.state.offset)
    ]
  }

  async getSprites(offset = 0) {
    const { data } = await api.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`)
    const { results } = data
    console.log('results', results[0])
    for(let i = 0; i < 20; i++){
      const { url } = results[i]
      
      const { data } = await api.get(url)
      const { sprites } = data
      const { back_default } = sprites
      console.log('back_default', back_default)
      // Precisa adicionar os back_default em um array e retornar para o componentdidimount, senao nao tem como puxar mesmo, genio sagrado
    }
  }

  render() {
    const sprites = this.state.sprites
    console.log('sprites', sprites)

    return(
      <>
        { sprites.map(images => (
          <Image src={images} thumbnail />
        )) }
      </>
    )
  }
}

export default Sprites