import { Header } from "./style";

export const HeaderPage = () => {
  return (
    <Header>
      <h1>
        Burguer
        <span>kenzie</span>
      </h1>

      <form>
        <input type="text" placeholder="Digitar Pesquisa" />
        <button>Pesquisar</button>
      </form>
    </Header>
  );
};
