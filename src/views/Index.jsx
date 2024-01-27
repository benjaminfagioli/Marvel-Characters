import React, { useState } from 'react'
import MyAtropos from '../components/MyAtropos'
import '../styles/Index.css'
import CardCharacter from '../components/CardCharacter/CardCharacter'
import { useEffect } from 'react'
import getSingleCharacter from '../helpers/getSingleCharacter'

const Index = () => {
  const [chdemo, setChdemo] = useState(null)
  
  useEffect(()=>{
    getSingleCharacter(setChdemo, 1016181)
  },[])
  return (
    <div>
      <div id="myBgc"></div>
      <div id="indexContainer">
        <MyAtropos>
          <CardCharacter name={chdemo?.name} img={`${chdemo?.thumbnail.path}.${chdemo?.thumbnail.extension}`} id={chdemo?.id} />
        </MyAtropos>
      </div>
    </div>

  )
}

export default Index