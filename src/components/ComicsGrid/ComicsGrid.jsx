import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import getCollectionURI from '../../helpers/getCollectionURI'


const ComicsGrid = ({info, string}) => {
  const [string1, setstring1] = useState([])
  const [number, setnumber] = useState(0)
  // console.log(string, info);
  useEffect(()=>{
    getCollectionURI(info, string, setstring1)
  },[])
  return (
    <>
    <Col id='comicsGrid' sm={12} className='d-flex justify-content-evenly p-sm-3 p-lg-4 pt-3 pb-lg-0 my-2'>
      {string1.length > 1?
      <>
      {/* <div id={string}> */}
        <button onClick={()=>number !== 0 && setnumber(number-9)}><i className= {`bi bi-caret-left fs-2 p-2 p-md-1 ${(number !== 0) ?  'text-white' :  'text-secondary text-opacity-25'}`} ></i></button>
        {string1[0].thumbnail 
        ?
        <div className="imgContainer">

          {string1.slice(number, number +9).map(item => 
            <OverlayTrigger overlay={<Tooltip>{item.title}</Tooltip>}>
            <img className='imgGrids' data-bs-toggle="tooltip"  data-bs-placement="top"  data-bs-title={item.title}  alt={item.name} src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}/>
          </OverlayTrigger>
          )}
        </div>
        :

          string1.map(item => 
          <div className='w-100 my-1'>
            <span className='fs-4'>{item.title}</span>
            {item.creators.items.map(creator=>
            <>
              <span className='text-white-50'> - {creator.name} </span> 
              <span className='fw-light text-white-50'>[{creator.role}]</span>
            </> 
            )}
          </div>)
        }
        <button onClick={()=>(number+9< string1.length) && setnumber(number+9)}><i className={`bi bi-caret-right fs-2 p-2 p-md-1 ${(number+9< string1.length) ?  'text-white' :  'text-secondary text-opacity-25'}`}></i></button>
      {/* </div> */}
      </>
      
      :
      <h5 className='d-none fw-bold'>Cargando...</h5>
      }
      <h5 className='pb-0 pb-lg-1  w-100 text-center position-sticky bottom-0'>{string}</h5>
    </Col>
    </>
  )
}

export default ComicsGrid