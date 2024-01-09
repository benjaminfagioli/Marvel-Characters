import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground'
import getSingleCharacter from '../helpers/getSingleCharacter'
import CharacterHeader from '../components/CharacterHeader/CharacterHeader'
import CharacterInfoSection from '../components/CharacterInfoSection/CharacterInfoSection'

const Character = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState(null)
  
  useEffect(()=>{
    getSingleCharacter(setCharacter, id)
  },[])
  return (
    <Container className='text-light my-2 my-md-4'>
      <ParticlesBackground/>
      {character
      ?
        <>
          <CharacterHeader character={character} />
          <CharacterInfoSection character={character} />
        </>
      :
        <Loader/>
      }
    </Container>
  )
}

export default Character