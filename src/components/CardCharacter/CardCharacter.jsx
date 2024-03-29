import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {cardCharacter, body, nameBox} from './cardCharacter.module.css'
import TestingFancyBox from '../TestingFancyBox';

const CardCharacter = ({name, img, id, d}) => {
  const navigate = useNavigate()
  console.log(id);
  const handleClick = (id)=>{
    navigate(`/character/${id}`)
  }
  return (
    <Card className={`${cardCharacter} ${d}`} >
      <Card.Body className={body}>
      <TestingFancyBox id={`${name}`} image={img} />
      {/* <img id={`${name}`} src={img} /> */}
      <div className={nameBox}>
        {/* <Card.Title className='m-0'>{name}</Card.Title>
        <Card.Text>
          <Button variant='transparent' onClick={()=>handleClick(id)}>See more</Button>
        </Card.Text> */}
        <Card.Text>
          <Button variant='tranparent' className='fs-5 mx-1 my-2 fw-bold' onClick={()=>handleClick(id)}>{name}
          <span className='span-hover'></span>
          </Button>

        </Card.Text> 
      </div>
      </Card.Body>
    </Card>
  );
}

export default CardCharacter