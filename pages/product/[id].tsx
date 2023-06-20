import { log } from "console"
import { useRouter } from "next/router";
import { Container, Main } from "../../styles/sharedstyles";
import Advert from "../../components/Advert";
import useProduct from "../../components/hooks/useProduct";

export default function ProductInfo(){

    const router =useRouter()
    const {id} =router.query
    
    const{loading, error, data} =useProduct
    (id as string);

    if (loading) return <p>Loading</p>;
    if(error) return <p>error</p>;

    const{product}=data;

    console.log(product, 'product');
    
    return(
        <Container>
            <Main>
                <Advert/>
            </Main>
        </Container>
    )
}