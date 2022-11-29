import { useState } from "react";
import { Home } from "./components/homePage/index";
import GlobalStyles from "./styles/globalStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function addProducts(list) {
    if (!currentSale.some((product) => product.id === list.id)) {
      setCurrentSale([...currentSale, list]);
      toast.success("Item adicionado");
    } else {
      toast.error("Esse item já foi adicionado");
    }
  }

  function removeProducts(productsId) {
    const newProducts = currentSale.filter((item) => item.id !== productsId);
    setCurrentSale(newProducts);
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Home
        currentSale={currentSale}
        addProducts={addProducts}
        removeProducts={removeProducts}
      />

      <ToastContainer
        position="top-right"
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
