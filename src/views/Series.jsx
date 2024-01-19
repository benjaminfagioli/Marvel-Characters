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

const Series = () => {
  const {id} = useParams()
  const [serie, setSerie] = useState(null)
  const [characters, setCharacters] = useState(null)
  console.log(serie?.description);
  // serie && console.log(serie.title.replace(serie.title.slice(serie.title.indexOf(' ('), serie.title.indexOf(')')+1),''))
  const getCharactersFromSerie =  async()=>{
    let aux = []
    try {
      const data = await fetch(`${serie?.characters?.collectionURI}${key}&limit=40`)
      const results = await data.json()
      let resultsFiltered = results.data.results.filter(ch=> ch?.thumbnail?.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && ch?.thumbnail?.extension !== 'gif')
      console.log(resultsFiltered)
      setCharacters(resultsFiltered)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getComicOrSerieByID(URL, key, id, setSerie)
  },[])
  useEffect(()=> {
    if (serie) document.title = serie.title
    serie && getCharactersFromSerie()
  }, [serie])
  return (
    <>
    <ParticlesBackground />
    {serie?
    <div id="serieContainer">
      <div id="imageSerie">
        <h1>{serie.title.slice(0, serie.title.indexOf('('))}</h1>
        <img src={serie.thumbnail.path + '.' + serie.thumbnail.extension} className='img-fluid' alt={serie.title} />
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
          <CarouselVerticalCharacters characters={characters} />
          {/* {characters?.map(ch=><CharactersCardVertical key={ch.name} character={ch} />)} */}
        </div>
      </div>
      <div id='creatorsSeries'>
        {serie?.creators?.available != 0 &&
        <>
          <h4 className='mt-2 fw-bold'>Creators</h4>
          {serie.creators.items.map(creator=><h5 className='fs-6'>{creator.name} - <span className='fs-6'> {creator.role[0].toUpperCase() + creator.role.slice(1)}</span></h5>)}
        </>
        }
      </div>

    </div>
    :
    <Loader/>
    }
    </>
  )
}

export default Series