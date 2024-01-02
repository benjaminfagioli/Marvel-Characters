import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import MyNavbar from '../MyNavbar/MyNavbar'
import MyFooter from '../MyFooter/MyFooter'

const RootLayout = () => {
  return (
    <>
    <MyNavbar/>
    <Container id='mainContainer'>
      <Outlet/>
    </Container>
    <MyFooter/>
    </>
  )
}

export default RootLayout