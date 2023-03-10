import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    display: flex;
`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Left=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center=styled.div`
    flex: 1;
    padding: 20px;
`
const Right=styled.div`
    flex: 1;
    padding: 20px;
`
const Title=styled.h3`
    margin-bottom: 30px;
`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem=styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
    margin: 20px 0px;
`
const SocialContainer=styled.div`
    display: flex;
`
const SocialIcon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>HS.</Logo>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sequi molestias eos aliquid rem ex ab dolorum praesentium voluptatum accusantium? Dignissimos quidem pariatur hic adipisci exercitationem eaque saepe harum iste?</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon> 
                <SocialIcon color='F39AB8'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='76C4E6'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>302/1,Street No. 2,Anand Parbat</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 9818 8475 90</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>harensharma75@gmail.com</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer