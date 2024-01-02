import React from 'react'
import { Form } from 'react-bootstrap'
import {input, inputAlt, inputBorder, inputBorderAlt, formControl} from './searcher.module.css'
const key = import.meta.env.VITE_MY_KEY
const URL_BASE = import.meta.env.VITE_URL_BASE
const Searcher = ({params, setParams }) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    setParams({name: e.target[0].value, page: 1})
  }
  
  return (
    <>
      <Form className={formControl} onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <input 
            className={`${input} ${inputAlt}`} 
            placeholder="Spider-Man..." 
            defaultValue={params.get('name') || null} 
            type="text" />
          <span className={`${inputBorder} ${inputBorderAlt}`}></span>
        </div>
      </Form>
    </>
  )
}

export default Searcher