import React from 'react'
import { AmazonButton } from '../../styles/sharedstyles'


interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}



const AddToBasketButton = ({ id, title, image, price, rating }: ProductProps) => {
  return (
    <AmazonButton>Add To Cart</AmazonButton>
  )
}

export default AddToBasketButton