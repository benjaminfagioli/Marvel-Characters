import { useEffect, useRef, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CardCharacter from '../components/CardCharacter/CardCharacter'
import { useSearchParams } from 'react-router-dom'
import Searcher from '../components/Searcher/Searcher'
import MyPagination from '../components/MyPagination/MyPagination'
import Loader from '../components/Loader/Loader'
import { getData } from '../helpers/getData'

const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE
function Home() {
  const [characters, setCharacters] = useState([])
  const [params, setParams] = useSearchParams({})
  const [loading, setLoading] = useState(false)
  let count = useRef()
  useEffect(()=>{
    getData(setLoading, params, URL_BASE, key, setCharacters, count)
  },[params])
  
  return (
    <>
    <div className='d-flex justify-content-center'>
      <Searcher params={params} setParams={setParams}/>
    </div>
        {loading
        ?
        <Loader/>
        :
        <>
        <Row className='justify-content-center'>
          {characters != []
          ?
            characters.map(ch => {
              let d ='xd'
              if (`${ch.thumbnail.path}.${ch.thumbnail.extension}` == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                d = 'd-none'
              }
              return(
                <CardCharacter
                  key={ch.name}
                  d={d}
                  name={ch.name} 
                  img={`${ch.thumbnail.path}.${ch.thumbnail.extension}`} 
                  description={ch.description}
                  id={ch.id}
                />
              )})  
          :
            <h1>Check out your network connection </h1>
          }
        </Row>
        <div className='d-flex justify-content-center mt-3'>
          <MyPagination params={params} setLoading={setLoading} setParams={setParams} data={[characters,count]}/>
        </div>
        </>
      }
    </>
  )
}

export default Home
