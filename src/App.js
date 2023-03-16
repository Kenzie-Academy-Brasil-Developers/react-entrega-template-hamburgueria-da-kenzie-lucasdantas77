import { useState } from "react";
import { Home } from "./components/homePage/index";
import GlobalStyles from "./styles/globalStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentSale, setCurrentSale] = useState([]);

  function addProducts(product) {
    if (!currentSale.some((item) => item.id === product.id)) {
      setCurrentSale([...currentSale, product]);
      toast.success("Item adicionado");
    } else {
      toast.error("Esse item já foi adicionado");
    }
  }

  function removeProducts(productsId) {
    const newProducts = currentSale.filter((item) => item.id !== productsId);
    setCurrentSale(newProducts);
  }

  function removeAll(){
    setCurrentSale([]);
    toast.info("Sua sacola está vazia")
  };

  return (
    <div className="App">
      <GlobalStyles />
      <Home
        currentSale={currentSale}
        addProducts={addProducts}
        removeProducts={removeProducts}
        removeAll={removeAll}
      />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
