import React, { useState } from 'react'
import MyAtropos from '../components/MyAtropos'
import '../styles/Index.css'
import CardCharacter from '../components/CardCharacter/CardCharacter'
import { useEffect } from 'react'
import getSingleCharacter from '../helpers/getSingleCharacter'
import MySwiper from '../components/InfoGrid'

const Index = () => {
  const [chdemo, setChdemo] = useState(null)
  console.log(chdemo?.comics);
  useEffect(()=>{
    getSingleCharacter(setChdemo, 1016181)
  },[])
  return (
    <div>
      <div id="myBgc"></div>
      {chdemo && 
            <div id="indexContainer">
            <div className='px-2'>
              <h4>Welcome to my <span className='text-danger'>Marvel's Characters</span> page!</h4>
              <p style={{maxWidth:'90ch', textWrap:'pretty'}}>This is a page who basically works consuming <span className='text-warning'>Official Marvel's API</span> from developers. D'you like marvel? Well, if so, you're gonna love this, search a character, see their info, like description, comics, series and stories they're in, <span className='text-warning'>navigating</span> in all of these.</p>
              <h5> Why don't you try? Have fun!</h5>
            </div>
            <div id="atroposContainer">
            <MyAtropos>
              <CardCharacter name={chdemo?.name} img={`${chdemo?.thumbnail.path}.${chdemo?.thumbnail.extension}`} id={chdemo?.id} />
            </MyAtropos>
            </div>
            <div id='indexGridsContainer'>
            <MyAtropos>
            <MySwiper info={chdemo?.comics} string={'Comics'} />

            </MyAtropos>
            <MyAtropos>
            <MySwiper info={chdemo?.series} string={'Series'} />

            </MyAtropos>
            </div>
            <h6>Note: If you notice that some item (comic, serie, character) are missing, it's because i filtered only items who have a own image.</h6>
          </div>
      }

    </div>

  )
}

export default Index