import { CardLi, CardUl, Image } from "./style";

export const List = ({ addProducts, products, filterProducts }) => {
  

  return (
    <CardUl>
      {filterProducts.length>0 ?filterProducts.map((list) => (
        <CardLi key={list.id}>
          <Image src={list.img} alt="imagem do produto"></Image>
          <h3>{list.name}</h3>
          <p>{list.category}</p>
          <span>{`R$ ${list.price}`}</span>
          <button onClick={() => addProducts(list)}>Adicionar</button>
        </CardLi>
      )):products.map((list) => (
        <CardLi key={list.id}>
          <Image src={list.img} alt="imagem do produto"></Image>
          <h3>{list.name}</h3>
          <p>{list.category}</p>
          <span>{`R$ ${list.price}`}</span>
          <button onClick={() => addProducts(list)}>Adicionar</button>
        </CardLi>))}
    </CardUl>
  );
};
