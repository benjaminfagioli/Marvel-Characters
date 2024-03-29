import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground'
import getComicOrSerieByID from '../helpers/getComicOrSerieByID'
import getCollectionURI from '../helpers/getCollectionURI'
import Loader from '../components/Loader/Loader'
import { Col, Row } from 'react-bootstrap'
const key = import.meta.env.VITE_MY_KEY
const URL = import.meta.env.VITE_URL_SERIES
import Badges from '../components/Badges/Badges'
import MySwiper from '../components/InfoGrid'
import ComicsGrid from '../components/ComicsGrid/ComicsGrid'
import '../styles/Series.css'
import CharactersCardVertical from '../components/CharactersCardVertical/CharactersCardVertical'
import CarouselVerticalCharacters from '../components/CarouselVerticalCharacters'
import TestingFancyBox from '../components/TestingFancyBox'

const Series = () => {
  const {id} = useParams()
  const [serie, setSerie] = useState(null)
  console.log(serie);
  // serie && console.log(serie.title.replace(serie.title.slice(serie.title.indexOf(' ('), serie.title.indexOf(')')+1),''))
  const bgResponsive = window.matchMedia('(max-width: 767px)').matches
  // console.log(bgResponsive);
  useEffect(()=>{
    getComicOrSerieByID(URL, key, id, setSerie)
  },[])
  useEffect(()=> {
    if (serie){
      document.title = `Series | ${serie.title.slice(0, serie.title.indexOf('('))}`
    } 
  }, [serie])
  return (
    <>
    {/* {bgResponsive ? <div id='myBgc' style={{background:'#070707'}} />: <ParticlesBackground />} */}
    <ParticlesBackground />
    {serie?
    <div id="serieContainer">
      <div id="imageSerie">
        <h1>{serie.title.slice(0, serie.title.indexOf('('))}</h1>
        <TestingFancyBox image={serie.thumbnail.path + '.' + serie.thumbnail.extension} description={serie.description} />
        {/* <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} className='img-fluid' alt={serie.title} /> */}
      </div>
      <div id='storiesSerie'>
        <ComicsGrid info={serie.stories} string={"Stories"}/>
      </div>
      {/* <div>
      <MySwiper info={serie.comics} string={"Comics"}/>
    </div> */}
      <div id='yearsContainer'>
        <h1 className='fw-bold'>Dates</h1>
        <span>Start Year: {serie.startYear} - End Year: {serie.endYear}</span>
      </div>
      <div id='charactersSeries'>
        <h4>Characters</h4>
        <div id="verticalCharactersContainer">
          <CarouselVerticalCharacters collection={serie?.characters?.collectionURI} />
        </div>
      </div>
      {/* <div id='creatorsSeries'>
        {serie?.creators?.available != 0 &&
        <>
          <h4 className='mt-2 fw-bold'>Creators</h4>
          {serie.creators.items.map(creator=><h5 className='fs-6'>{creator.name} - <span className='fs-6'> {creator.role[0].toUpperCase() + creator.role.slice(1)}</span></h5>)}
        </>
        }
      </div> */}

    </div>
    :
    <Loader/>
    }
    </>
  )
}

export default Series