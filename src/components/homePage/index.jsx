import { CartPage } from "../cart";
import { HeaderPage } from "../headerPage";
import { List } from "../products";
import { DivContainer } from "./style";

export const Home = ({ addProducts, removeProducts, currentSale }) => {
  return (
    <main>
      <HeaderPage />
      <DivContainer>
        <List addProducts={addProducts} />
        <CartPage currentSale={currentSale} removeProducts={removeProducts} />
      </DivContainer>
    </main>
  );
};
