import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../raw/slideritems';
import {mobile} from '../responsive';
const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left:${props=> props.direction==="left" && "10px"};
    right:${props=> props.direction==="right" && "10px"};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props)=>props.slideIndex*-100}vw);
    transition: all 1.5s ease;
`
const Slide=styled.div`
    background-color: #${props=>props.bg};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImageContainer=styled.div`
    height: 100%;
    flex: 1;
    ${mobile({display:"none"})}
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 50px;

`
const Title=styled.h1`
    font-size: 70px;
`
const Desc=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing :2px ;

`
const Button=styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Image=styled.img`
    height:100%;
    width: 100%;
`
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleclick=(direction)=>{
        if(direction==="left"){
            if(slideIndex===0){
                setSlideIndex(sliderItems.length-1);
            }
            else{
                setSlideIndex(slideIndex-1);
            }
        }
        else{
            if(slideIndex===sliderItems.length-1){
                setSlideIndex(0);
            }
            else{
                setSlideIndex(slideIndex+1);
            }
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleclick("left")}>
            <ArrowLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleclick("right")}>
            <ArrowRightIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider