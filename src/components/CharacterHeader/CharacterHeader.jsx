import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ErrorDialog from '../ErrorDialog/ErrorDialog'
import TestingFancyBox from '../TestingFancyBox'

const CharacterHeader = ({character}) => {
  return (
    <>
      <h1 className='z-4 position-relative fw-bold' id='characterTitle'>{character.name}</h1>
      <Row className='align-items-center p-0'>
        <Col className='p-0' lg={5}>
          <TestingFancyBox id='imgCharacterView' image={character.thumbnail.path+'.' +character.thumbnail.extension} />
        </Col>
        <Col lg={7}>
          {character.description != '' && character.description!= ' '
          ? <p id='characterDescription' className='px-md-3 fs-3 z-4 position-relative'>{character.description}</p>
          : 
            <ErrorDialog/>
          }
        </Col>
      </Row>
    </>
  )
}

export default CharacterHeader