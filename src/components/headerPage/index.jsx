import { Header } from "./style";

export const HeaderPage = ({
  pesquisa,
  setPesquisa,
  products,
  setFilterProducts,
}) => {

  function filter(event) {
    event.preventDefault()
    const newFilter = products.filter((product) => {
      if (product.name.toLowerCase().includes(pesquisa) || product.category.toLowerCase().includes(pesquisa)) {
        return true;
      }
    });
    setFilterProducts(newFilter);
  }
  return (
    <Header>
      <h1>
        Burguer
        <span>kenzie</span>
      </h1>

      <form>
        <input
          value={pesquisa}
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setPesquisa(event.target.value)}
        />
        <button onClick={filter}>Pesquisar</button>
      </form>
    </Header>
  );
};
