import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {cardCharacter, body, nameBox} from './cardCharacter.module.css'
const CardCharacter = ({name, img, description, id,d}) => {
  const navigate = useNavigate()
  const handleClick = (id)=>{
    navigate(`character/${id}`)
  }

  return (
    <Card className={`${cardCharacter} ${d} col-sm-10 col-lg-5 mx-3 my-3`} >
      <Card.Body className={body}>
      <img id={`${name}`} src={img} />
      <div className={nameBox}>
        <Card.Title className='m-0'>{name}</Card.Title>
        <Card.Text>
          <Button variant='transparent' onClick={()=>handleClick(id)}>See more</Button>
        </Card.Text>
      </div>
      </Card.Body>
    </Card>
  );
}

export default CardCharacter