import React, { useRef } from 'react'
import { Pagination } from 'react-bootstrap'
const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const MyPagination = ({params, setParams, data}) => {
  let pagina = parseInt(params.get('page')) || 1
  let [characters, count] = data
  let calc = parseInt( count?.current?.total /20 ) + 1 || 2
  const handleClick = async (i)=>{
    params.set('page', i)
    setParams(params)
  }
  return (
  <Pagination id='pagination' >
    {pagina > 1
    ?
      <>
        <Pagination.First onClick={()=>handleClick(1)} />
        <Pagination.Item onClick={()=>handleClick(pagina-1 || 0)}>{pagina-1}</Pagination.Item>
      </>
    :
      <>
        <Pagination.First disabled/>
        <Pagination.Item disabled>{0}</Pagination.Item>
      </>
    }

    <Pagination.Item active>{pagina || 1}</Pagination.Item>

    {characters.length < 20 || count.current.total === 20
    ?
      <>
        <Pagination.Item disabled>{pagina+1}</Pagination.Item>
        <Pagination.Last disabled/>
      </>
    :
      <>
        <Pagination.Item onClick={()=>handleClick(pagina+1 || 2)}>{pagina+1 || 2}</Pagination.Item>
        <Pagination.Last onClick={()=>handleClick(calc)}/>
      </>
    }

  </Pagination>
  )
}

export default MyPagination