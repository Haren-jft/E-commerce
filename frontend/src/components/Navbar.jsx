import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import {mobile} from '../responsive'
const Container=styled.div`
    height: 60px;
    ${mobile({height:"50px"})}
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`

const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`

const Left=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center=styled.div`
    flex: 1;
    text-align: center;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center"})}
`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    padding: 10px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`

const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input=styled.input`
    ${mobile({width:"50px"})}
    border: none;
`
const Logo=styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <SearchIcon style={{color:grey,fontSize:16,marginLeft:5}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>HS.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge color="secondary" badgeContent={10}>
                        <ShoppingCartIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar