import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ComicHeader = ({comic}) => {
  return (
    <div id="headerComic" style={{background:`url(${comic.thumbnail.path}.${comic.thumbnail.extension})`}}>
      <div className="cape"></div>
        <Container id='headerComicContainer' className='p-0 d-flex flex-column justify-content-center position-relative'>
        <h1 className='fw-bold mb-lg-3'>{comic?.title}</h1>
        <Row>
          <Col sm={12} md={4} lg={4} id='comicCoverContainer'>
          {comic.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' && <img id='comicCover' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}></img>}
          </Col>
          <Col sm={12} md={6} lg={6} className='flex-grow-1'>
            <h4 className='fw-bold mb-0'>Published:</h4>
            <p>{new Date(comic?.dates[0]?.date).toLocaleDateString('en-us' ,{ year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {comic?.description === '' 
            ? 
            <>
              <p className='fs-6 mt-3 mb-1 align-self-start'> {comic?.textObjects[0]?.text}</p>

              <p className='text-white-50'>Only for ${comic?.prices[0].price || 1.99}</p>
            </>
            :
            <>
              <p className='fs-6 mt-3 mb-1'>{comic.description}</p>
              <p className='text-white-50'>Only for ${comic?.prices[0].price}</p>
            </>
            }
          </Col>
          <Col sm={12} md={6} lg={3} className='flex-grow-0'>
          {/* descripcion */}
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ComicHeader