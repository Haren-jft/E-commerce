import React from 'react'
import styled from 'styled-components'
import { categories } from '../raw/categories'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'
const Container=styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Categories = () => {
  return (
    <Container>
        {
            categories.map((item)=><CategoryItem item={item} key={item.id}/>)
        }
    </Container>
  )
}

export default Categories