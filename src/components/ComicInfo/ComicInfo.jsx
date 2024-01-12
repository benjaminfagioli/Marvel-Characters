import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const ComicInfo = ({comic, characters}) => {
  const navigate = useNavigate()
  return (
    <>
    <div id="infoComic">

      {/* personajes */}
      <h4>Characters</h4>
      {characters?.map(character=>{
        if (character.thumbnail.path != 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
          return(
            <OverlayTrigger overlay={<Tooltip>{character.name}</Tooltip>}>
              <img width={'150px'} onClick={()=>navigate(`/character/${character.id}`)} height={'150px'} className='m-1' src={`${character.thumbnail.path}.${character.thumbnail.extension}`}></img>
            </OverlayTrigger>
            )
          }})
        }
      {/* autores */}
      {comic?.creators.available != 0 &&
      <>
        <h4 className='mt-2'>Creators</h4>
        {comic.creators.items.map(creator=><h5>{creator.name} - {creator.role[0].toUpperCase() + creator.role.slice(1)}</h5>)}
      </>
      }
    </div>
    </>
  )
}

export default ComicInfo