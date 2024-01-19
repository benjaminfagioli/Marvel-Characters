import React from 'react'
import {verticalCharacter} from './CharactersCardVertical.module.css'
const CharactersCardVertical = ({character}) => {
  return (
    <div className={verticalCharacter}>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
      <h5>{character.name}</h5>
    </div>
  )
}

export default CharactersCardVertical