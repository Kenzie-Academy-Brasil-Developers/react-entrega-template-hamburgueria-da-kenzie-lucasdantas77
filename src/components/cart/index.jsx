import {
  DivCart,
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
        <DivCart>
          <h2>Carrinho de compras</h2>
        </DivCart>

        <UlCart>
          {currentSale.map((list) => (
            <li key={list.id}>
              <img src={list.img} alt="imagem do produto"></img>
              <DivDesc>
                <h3>{list.name}</h3>
                <p>{list.category}</p>
              </DivDesc>
              <span onClick={() => removeProducts(list.id)}>Remover</span>
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
