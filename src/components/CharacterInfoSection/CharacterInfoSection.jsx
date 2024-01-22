import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ComicsGrid from '../ComicsGrid/ComicsGrid'
import Badges from '../Badges/Badges'
import MySwiper from '../InfoGrid'

const CharacterInfoSection = ({character}) => {
  return (
    <Row className='justify-content-between'>
      <Col id='badgesContainer' sm={12} lg={4}>
        <Badges info={"comics"} number={character.comics.available} />
        <Badges info={"series"} number={character.series.available} />
        <Badges info={"stories"} number={character.stories.available} />
      </Col>
      <Col className='d-flex align-items-center flex-grow-1 ps-lg-5 ' sm={12} lg={8}>
        <div id="line"></div>
      </Col>
      <Row id='comicsInfo' lg={12}>
        <MySwiper info={character.comics} string={"Comics"}/> 
        <MySwiper info={character.series} string={"Series"} />
        <ComicsGrid info={character.stories} string={"Stories"}/>
      </Row>
    </Row>
  )
}

export default CharacterInfoSection