import React from 'react'
import Link from "next/link";
import { Logo, Nav, SearchBox, SearchInput,SearchIconButton, Option, OptionTopLine, OptionBottomLine, Basket, BasketCounter, SignInLink, CheckoutLink } from './styled'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useAppDispatch, useAppSelector } from '../../lib/store/hooks';
import { selectUser, signOutFromAccount } from '../../lib/store/reducers/userReducer';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/router';
import { selectCartItemsCount } from '../../lib/store/reducers/cartReducer';
import AmazonLogo from '../../public/amazon_PNG11.png';
const Header = () => {

  const user =useAppSelector(selectUser)
  const dispatch= useAppDispatch()
  const router =useRouter()
  const quantity = useAppSelector(selectCartItemsCount);

  const handleSignOut =()=>{
    if(user !== null){
      auth.signOut();
      dispatch(signOutFromAccount())
    }else{
      router.push('login')
    }
  }
  return (
    <Nav> <Link href="/">
    <Logo
      src={AmazonLogo}
      alt="Amazon Logo"
      width={100}
      height={100}
    />
  </Link>
  <SearchBox>
        <SearchInput type="text" />
        <SearchIconButton />
      </SearchBox>

      <SignInLink>
      <Option>
        <OptionTopLine>Hello {user?.email}</OptionTopLine>
        <OptionBottomLine onClick={()=>handleSignOut()}>{ user !== null ? "Sign Out" : "Sign In"}</OptionBottomLine>
      </Option>
      </SignInLink>

      <Option>
        <OptionTopLine>Returns</OptionTopLine>
        <OptionBottomLine>& Orders</OptionBottomLine>
      </Option>

      <CheckoutLink href="/checkout">
      <Basket>
      <ShoppingCartOutlinedIcon />
      <BasketCounter>{quantity}</BasketCounter>
      </Basket>
      </CheckoutLink>
  
  </Nav>
  )
}

export default Header