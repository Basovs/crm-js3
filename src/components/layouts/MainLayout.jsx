import React from "react"
import styled from "styled-components"
import MainHeader from "../headers/MainHeader"
import Footer from "../footers/Footer"
import DecorationLine from "../decorations/DecorationLine"

const MainLayout = ({ children }) => {
  return (
    <MyComponent>
      <DecorationLine />
      <MainHeader />
      <MyMain>{children}</MyMain>
      <Footer />
      <DecorationLine />
    </MyComponent>
  )
}

export default MainLayout

const MyComponent = styled.div`
  display: flex;
  flex-direction: column;

  min-block-size: 100vh;
`

const MyMain = styled.main`
  flex-grow: 1;
`
