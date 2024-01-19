import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground'
import getComicOrSerieByID from '../helpers/getComicOrSerieByID'
import Loader from '../components/Loader/Loader'
import ComicHeader from '../components/ComicHeader/ComicHeader'
import ComicInfo from '../components/ComicInfo/ComicInfo'
const key = import.meta.env.VITE_MY_KEY
const URL_COMICS = import.meta.env.VITE_URL_COMICS

const Comic = () => {
  const {id} = useParams()
  const [comic, setComic] = useState(null)
  const [characters, setCharacters] = useState(null)
  const getCollection = async () =>{
    try {
      const results= await fetch(`${comic.characters.collectionURI}${key}`)
      const {data} = await results.json()
      setCharacters(data.results)
    } catch (error) {
      console.log(error.message);
    }
    console.log(comic);
  }
  if (comic) document.title = `Comics | ${comic.title}`
  useEffect(()=>{
    getComicOrSerieByID(URL_COMICS, key, id, setComic)
  },[])
  // console.log(characters);
  let fecha = new Date(comic?.dates[0]?.date)
  useEffect(()=>{
    comic && getCollection()
  },[comic])
  return (
    <>
    <div id="myBgc"></div>
    {characters && comic ?
    <main className='px-2 px-md-0'>
      <ComicHeader comic={comic} />
      <ComicInfo comic={comic} characters={characters} />
    </main>
    :
    <Loader/>     
    }
    </>
  )
}

export default Comic