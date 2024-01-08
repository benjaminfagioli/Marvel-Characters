import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { Col } from 'react-bootstrap'
const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const ComicsGrid = ({info, string}) => {
  const [string1, setstring1] = useState([])
  const [number, setnumber] = useState(0)
  let colorbutton
  console.log(string, info);
  const getCollectionURI = async ()=>{
    let aux= []
    try {
      const data = await fetch(`${info.collectionURI}${key}&limit=90`)
      const results = await data.json()
      results.data.results.forEach(result => result.thumbnail?.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && aux.push(result))
      // setstring1(results.data.results);
    } catch (error) {
      console.log(error.message);
    } finally{
      console.log(aux);
      setstring1(aux)
    }
  }
  useEffect(()=>{
    string != 'Stories' && getCollectionURI()
  },[])
  return (
    <>
    <Col id='comicsGrid' sm={12} className='d-flex flex-wrap justify-content-evenly p-sm-3 p-lg-4 pt-3 pb-5 my-2'>
      {string1.length > 1?
      <>
      {/* <div id={string}> */}

        <button onClick={()=>number !== 0 && setnumber(number-9)}><i class= {`bi bi-caret-left fs-3 ${(number !== 0) ?  'text-white' :  'text-secondary text-opacity-25'}`} ></i></button>
          {string1.slice(number, number +9).map(item => <img className='imgGrids' title={item.title} alt={item.name} src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}/>)}
        <button onClick={()=>(number+9< string1.length) && setnumber(number+9)}><i class={`bi bi-caret-right fs-3 ${(number+9< string1.length) ?  'text-white' :  'text-secondary text-opacity-25'}`}></i></button>
      {/* </div> */}
      </>
      
      :
      <h5 className='d-none fw-bold'>Cargando...</h5>
      }
      <h5 className='position-absolute pb-3 pb-lg-1'>{string}</h5>
    </Col>
    </>
  )
}

export default ComicsGrid