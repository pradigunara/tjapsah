import React from 'react'
import 'App.css'
import { Image } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

function App() {

  const cardAsset = (card) => {
    return require(`assets/cards/${card}.svg`)
  }
  const cardsOnHand = useSelector(state => state.reducers.cardsOnHand)

  return (
    <div className="App">
      <div className="game-background">
        <div className="cards-on-hand">
          {cardsOnHand.map((card, index) => <Image key={index} src={cardAsset(card)} size="tiny" />)}
        </div>
      </div>
    </div>
  )
}

export default App
