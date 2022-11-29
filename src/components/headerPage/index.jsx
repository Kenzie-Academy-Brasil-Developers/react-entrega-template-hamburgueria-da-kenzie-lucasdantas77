import { Header } from "./style";

export const HeaderPage = ({
 search,
  setSearch,
  products,
  setFilterProducts,
}) => {

  function filter(event) {
    event.preventDefault()
    const newFilter = products.filter((product) => {
      if (product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)) {
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
          value={search}
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={filter}>Pesquisar</button>
      </form>
    </Header>
  );
};
