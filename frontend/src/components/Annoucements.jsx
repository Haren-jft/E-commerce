import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;//text color
    display: flex;
    align-items: center;//vertically
    justify-content: center;//horizontally
    font-size: 14px;
    font-weight: 500;
`
const Annoucements = () => {
  return (
    <Container>
        Super Deal!Free Shipping on Orders over Rs500
    </Container>
  )
}

export default Annoucements