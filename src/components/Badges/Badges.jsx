import React from 'react'

const Badges = ({info, number}) => {
  return (
    <div className='badge'>
      <span className='fs-6 border-1 pb-2 border-bottom'>
        {number}
      </span>
      <span className='fs-6 mt-2'>
        {info}
      </span>
    </div>
  )
}

export default Badges