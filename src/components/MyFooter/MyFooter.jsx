import React from 'react'
import marvelFooter from '../../assets/marvel_footer.png'
import { Col, Container, Row } from 'react-bootstrap'
const MyFooter = () => {
  return (
    <footer>
      <Container>

      <Row className='align-items-center mt-3'>
        <Col className='text-center mt-4 mb-3 my-md-0' md={9}>
          <div>
            <h3>Page running with:</h3>
            <h5><a target='_blank' href="https://developer.marvel.com">© https://developer.marvel.com ©</a></h5>
          </div>
        </Col>
        <Col className='p-0' md={3}>
          <img className='img-fluid ' src={marvelFooter} alt="" />
        </Col>
      </Row>
      </Container>
    </footer>
  )
}

export default MyFooter