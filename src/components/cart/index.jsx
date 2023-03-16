import {
  DivCart,
  DivContainer,
  DivDesc,
  DivTotal,
  SectionCart,
  UlCart,
  DivItens

} from "./style";

export const CartPage = ({
  currentSale,
  removeProducts,
  setCurrentSale,
  removeAll,
}) => {
  const total = currentSale
    .reduce((previousValue, product) => {
      return previousValue + product.price;
    }, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <DivContainer>
      <SectionCart>
        <DivCart>
          <h2>Carrinho de compras</h2>
        </DivCart>

        <UlCart>
          {!currentSale.length ? (
            <DivItens>
              <h3>Sua sacola está vazia</h3>
              <p>Adicione itens</p>
            </DivItens>
          ) : (
            currentSale.map((product) => (
              <li key={product.id}>
                <img src={product.img} alt="imagem do produto"></img>
                <DivDesc>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </DivDesc>
                <span onClick={() => removeProducts(product.id)}>Remover</span>
              </li>
            ))
          )}
        </UlCart>
      </SectionCart>
      <DivTotal>
        <div>
          <p>Total</p>
          <span>{total}</span>
        </div>

        <button onClick={() => removeAll()}>Remover todos</button>
      </DivTotal>
    </DivContainer>
  );
};
