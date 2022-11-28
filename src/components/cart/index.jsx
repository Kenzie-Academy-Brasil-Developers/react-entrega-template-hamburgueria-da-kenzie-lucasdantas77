import { DivCarrinho, DivContainer, DivTotal, SectionCart } from "./style"

export const CartPage = ()=>{
    return (
        <DivContainer>
  <SectionCart>
     <DivCarrinho>
       <h2>
        Carrinho de compras
       </h2>
     </DivCarrinho>
   <ul>
     <li>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
      <p>item</p>
     </li>
   </ul>
  </SectionCart>
   <DivTotal>
   <div>
   <p>Total</p>
   <span>40,00</span>
   </div>

   <button>Remover todos</button>
   
</DivTotal>
        </DivContainer>
 
   )
}


