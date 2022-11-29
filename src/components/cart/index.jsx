import { useState } from "react";
import {
  DivCarrinho,
  DivContainer,
  DivDesc,
  DivTotal,
  SectionCart,
  UlCart,
} from "./style";

export const CartPage = ({ currentSale, removeProducts }) => {
  return (
    <DivContainer>
      <SectionCart>
        <DivCarrinho>
          <h2>Carrinho de compras</h2>
        </DivCarrinho>

        <UlCart>
          {currentSale.map((lista) => (
            <li key={lista.id}>
              <img src={lista.img} alt="imagem do produto"></img>
              <DivDesc>
                <h3>{lista.name}</h3>
                <p>{lista.category}</p>
              </DivDesc>
              <span onClick={() => removeProducts(lista.id)}>Remover</span>
            </li>
          ))}
        </UlCart>
      </SectionCart>
      <DivTotal>
        <div>
          <p>Total</p>
          <span>40,00</span>
        </div>

        <button>Remover todos</button>
      </DivTotal>
    </DivContainer>
  );
};
