import React, { useState, useEffect } from 'react';

function Carrinho({props}) {
  const [cart, setCart] = useState([])

  useEffect(() => {
      setCart([
        ...cart, props
      ])
    }, [props]
  )

  return(
    <ul style={{ listStyleType: 'none', position: 'relative', left: '-3%'}}>
      {
        cart.map(pokemon =>( 
          <li>
            { pokemon.name !== '' && 
              <h3>{ pokemon.name }</h3>
            }
          </li>
        ))
      }
    </ul>
  )
}

export default Carrinho