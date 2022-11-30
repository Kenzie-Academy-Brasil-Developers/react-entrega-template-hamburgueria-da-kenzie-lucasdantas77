import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CartPage } from "../cart";
import { HeaderPage } from "../headerPage";
import { List } from "../products";
import { DivContainer } from "./style";

export const Home = ({
  addProducts,
  removeProducts,
  currentSale,
}) => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    async function renderCards() {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {}
    }
    renderCards();
  }, []);

  return (
    <main>
      <HeaderPage
        search={search}
        setSearch={setSearch}
        setFilterProducts={setFilterProducts}
        products={products}
      />
      <DivContainer>
        <List addProducts={addProducts} filterProducts={filterProducts} products={products} />
        <CartPage currentSale={currentSale} removeProducts={removeProducts}/>
      </DivContainer>
    </main>
  );
};
