import React from 'react'
import loader from '../../../src/assets/768px-Captain_America_Shield.svg.png'
import {loaderContainer} from './loader.module.css'
const Loader = () => {
  return (
    <div className={loaderContainer}><img src={loader} alt="" /></div>
  )
}

export default Loader