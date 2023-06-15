
import {
  BackgroundImg,
  HomeContainer,
  ProductRows,
} from "../styles/homestyles";
import Product from "../components/Product";


export default function Home() {
  return (
    <HomeContainer>
       <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <ProductRows>
      <Product
      id="123569587416"
      title="Barbell"
      price={10.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/71-Ot5pke1L._ACSL1500_.jpg"
      />
      <Product
      id="123569587416"
      title="Barbell"
      price={10.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/71-Ot5pke1L._ACSL1500_.jpg"
      />
      </ProductRows>
    </HomeContainer>
  )
}
