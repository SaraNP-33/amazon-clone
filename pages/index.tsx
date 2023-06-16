
import {
  BackgroundImg,
  HomeContainer,
  ProductRows,
} from "../styles/homestyles";
import Product from "../components/Product";
import useProducts from "../components/hooks/useProducts";
import { ProductType } from "../types/product";



export default function Home() {
  const {loading, error, data}=useProducts();

  if(loading) return <p>Loading...</p>
  if (error) return <p>Oops something is wrong.</p>

  return (
    <HomeContainer>
       <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <ProductRows>
      {!!data && data?.products.map((product: ProductType)=>{
        return(
         <Product
         key={product.id}
         id={product.id}
         title={product.name}
         price={product.price}
         rating={Math.floor(Math.random() * 4) + 1}
         image={product.images[0].url}
         />
        )
      })}
      </ProductRows>
    </HomeContainer>
  )
}
