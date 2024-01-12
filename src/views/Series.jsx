import React from 'react'
import { useParams } from 'react-router-dom'
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground'

const Series = () => {
  const {id} = useParams()
  return (
    <>
    <ParticlesBackground>
    </ParticlesBackground>
      <h1>{id}</h1>
      
    </>
  )
}

export default Series