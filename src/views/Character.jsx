import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import ErrorDialog from '../components/ErrorDialog/ErrorDialog'
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground'
import Badges from '../components/Badges/Badges'
import ComicsGrid from '../components/ComicsGrid/ComicsGrid'
const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE

const Character = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState(null)
  const getData = async ()=>{
    try {
      let info = await fetch(`${URL_BASE}/${id}${key}`)
      let {data} = await info.json()
      let results = data.results[0]
      console.log(results);
      setCharacter(results)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <Container className='text-light my-2 my-md-4'>
      <ParticlesBackground/>
      {character
      ?
        <>
          <h1 className='z-4 position-relative' id='characterTitle'>{character.name}</h1>
          <Row className='align-items-center p-0'>
            <Col className='p-0' lg={5}>
              <img height={'500px'} width={'100%'} src={character.thumbnail.path+'.' +character.thumbnail.extension} alt="" className='mb-3 object-fit-cover z-4 position-relative'/>
            </Col>
            <Col lg={7}>
              {character.description != '' && character.description!= ' '
              ? <p id='characterDescription' className='px-md-3 fs-3 z-4 position-relative'>{character.description}</p>
              : 
                <ErrorDialog/>
              }
            </Col>
          </Row>
          <Row className='justify-content-between'>
            <Col id='badgesContainer' sm={12} lg={4}>
              <Badges info={"comics"} number={character.comics.available} />
              <Badges info={"series"} number={character.series.available} />
              <Badges info={"stories"} number={character.stories.available} />
            </Col>
            <Col className='d-flex align-items-center flex-grow-1 ps-lg-5 ' sm={12} lg={9}>
              <div id="line"></div>
            </Col>
            <Row id='comicsInfo' lg={12}>
              <ComicsGrid info={character.comics} string={"Comics"}/>
              <ComicsGrid info={character.series}string={"Series"}/>
              <ComicsGrid info={character.stories}string={"Stories"}/>
            </Row>
          </Row>
        </>
      :
        <Loader/>
      }
    </Container>
  )
}

export default Character