import React from 'react'
import {verticalCharacter} from './CharactersCardVertical.module.css'
import { useNavigate } from 'react-router-dom'
const CharactersCardVertical = ({character}) => {
  const navigate = useNavigate()
  return (
    <div className={verticalCharacter}>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} onClick={()=> navigate('/character/'+ character.id)} />
      <h5>{character.name}</h5>
    </div>
  )
}

export default CharactersCardVertical