import { CardLi, CardUl, Image } from "./style";

export const List = ({ addProducts, products, filterProducts }) => {
  

  return (
    <CardUl>
      {filterProducts.length>0 ?filterProducts.map((product) => (
        <CardLi key={product.id}>
          <Image src={product.img} alt="imagem do produto"></Image>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <span>{`R$ ${product.price}`}</span>
          <button onClick={() => addProducts(product)}>Adicionar</button>
        </CardLi>
      )):products.map((product) => (
        <CardLi key={product.id}>
          <Image src={product.img} alt="imagem do produto"></Image>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <span>{`R$ ${product.price}`}</span>
          <button onClick={() => addProducts(product)}>Adicionar</button>
        </CardLi>))}
    </CardUl>
  );
};
