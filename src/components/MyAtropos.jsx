import React, { Children } from 'react'
import Atropos from 'atropos/react'

const MyAtropos = ({children}) => {
  return (
    <Atropos
    className='my-atropos'
    activeOffset={100}
    rotateXInvert={false}
    alwaysActive={true}
    shadowScale={1}
    stretchZ={500}
    duration={200}
    highlight={true} //reflejo
    >
      {children}
    </Atropos>
  )
}

export default MyAtropos