import { log } from "console"
import { useRouter } from "next/router";
import { Container, Main } from "../../styles/sharedstyles";
import Advert from "../../components/Advert";

export default function ProductInfo(){

    const router =useRouter()
    const {id} =router.query
    
    
    return(
        <Container>
            <Main>
                <Advert/>
            </Main>
        </Container>
    )
}