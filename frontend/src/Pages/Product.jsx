import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Annoucements'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
const Wrapper=styled.div`
  padding: 50px;
  display: flex;
`
const Container=styled.div`
`
const ImageContainer=styled.div`
  flex: 1;
`
const InfoContainer=styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title=styled.h1`
  font-weight: 200;
`
const Image=styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`
const Desc=styled.p`
  margin: 20px 0px ;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Filter=styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle=styled.div`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize=styled.select`
  padding: 5px;
  margin-left: 10px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer=styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount=styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0px 5px;
  border: 1px solid teal; 
`
const Button=styled.button`
  padding: 15px;
  font-weight: 500;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    background-color: teal;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src="https://pixlr.com/images/index/remove-bg.webp"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eum ut doloremque, nam pariatur molestias nesciunt harum, maiores hic tempore accusantium ullam minus possimus iusto modi voluptates sequi commodi incidunt.</Desc>
          <Price>Rs 3000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="darkblue"/>
              <FilterColor color="black"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product