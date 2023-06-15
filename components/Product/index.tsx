import React from 'react'
import { Info, ProductContainer } from './style'
import { Title } from '../../styles/sharedstyles';


interface ProductProps{
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
}

const Product = ({ id, title, image, price, rating }:ProductProps) => {
  return (
   <ProductContainer>
    <img src={image} alt={title}/>
    <Info>
     <Title>{title}</Title>
    </Info>
   </ProductContainer>
  )
}

export default Product