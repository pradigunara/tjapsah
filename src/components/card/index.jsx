import React from 'react'
import { Image } from 'semantic-ui-react'

export default function Card({ cardName }) {
    return <Image className="card-image" src={require(`assets/cards/${cardName}.svg`)} />
}
