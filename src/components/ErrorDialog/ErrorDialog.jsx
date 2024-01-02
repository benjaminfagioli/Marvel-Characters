import React from 'react'
import errorImage from '../../assets/iron-man-error.png'
import rain from '../../assets/iron-man-rain.477626af.gif'
const ErrorDialog = () => {
  return (
    <div id='errorDialog' className='d-flex justify-content-center h-50 position-relative'>
      <img className='img-fluid opacity-25 object-fit-contain' src={errorImage} alt="Iron-Man destroyed" />
      <img id='rain' src={rain} alt="" />
      <span className='display-6 fs-1 top-50 text-center position-absolute'>We're sorry, this character is momentarily without description</span>
    </div>
  )
}

export default ErrorDialog