import Head from 'next/head'
import {
  Container, Main,
  
} from '../styles/sharedstyles'
import Advert from '../components/Advert'
import { CheckoutBody, CheckoutContainer, CheckoutTitle } from '../styles/chechoutstyles'
import { useAppSelector } from '../lib/store/hooks'
import { selectCartItems, selectCartItemsCount } from '../lib/store/reducers/cartReducer'
import { CartType } from '../types/cart'
import CheckoutProduct from '../components/CheckoutProduct'
import SubTotal from '../components/SubTotal'


export default function Checkout() {

  const cart= useAppSelector(selectCartItems);
  const cartCount =useAppSelector(selectCartItemsCount);
  return (
    <Container>
      <Main>
      <Advert/>
      <CheckoutBody>
        <CheckoutContainer>
          {cart.length === 0? (
            <div>
              <h2>Your Shopping Cart is Empty</h2>
            </div>
          ):(
            <div>
              <CheckoutTitle>
                  Your Shopping Cart - {cartCount}{" "}
                  {cartCount > 1 ? "items" : "item"} in Cart
                </CheckoutTitle>
                {cart.map((item: CartType, index: number) => (
                  <CheckoutProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                ))}
            </div>
          )}
        </CheckoutContainer>
        {cart?.length > 0 && <SubTotal />}
      </CheckoutBody>
      </Main>
    </Container>
  )
}
