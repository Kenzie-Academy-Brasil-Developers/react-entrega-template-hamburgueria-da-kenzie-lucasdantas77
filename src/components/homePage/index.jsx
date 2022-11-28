import { CartPage } from "../cart"
import { HeaderPage } from "../headerPage"
import { List } from "../products"
import { DivContainer } from "./style"

export const Home= ()=>{
    return(
  <main>
      <HeaderPage/>
      <DivContainer>
      <List/>
      <CartPage/>
      </DivContainer>
 </main> 
    )
}
