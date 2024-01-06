import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { Col } from 'react-bootstrap'
const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const ComicsGrid = ({info, string}) => {
  const [string1, setstring1] = useState([])
  console.log(string, info);
  const getCollectionURI = async ()=>{
    let aux= []
    try {
      const data = await fetch(`${info.collectionURI}${key}`)
      const results = await data.json()
      results.data.results.forEach(result => result.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && aux.push(result))
      // setstring1(results.data.results);
    } catch (error) {
      console.log(error.message);
    } finally{
      console.log(aux);
      setstring1(aux)
    }
  }
  useEffect(()=>{
    getCollectionURI()
  },[])
  return (
    <>
    <Col id='comicsGrid' sm={12} className='d-flex flex-wrap justify-content-evenly p-2 my-2'>
      {string1.length > 1?
      string1.slice(0,9).map(item => <img className='imgGrids' src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>)
      
      :
      <h5 className='d-none fw-bold'>Cargando...</h5>
      }
      <h5>{string}</h5>
    </Col>
    </>
  )
}

export default ComicsGrid