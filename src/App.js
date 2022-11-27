import { useState } from 'react';
import { Home } from './homePage';
import GlobalStyles from './styles/globalStyles';



function App() {
  

const [filteredProducts, setFilteredProducts] = useState([]);
const [currentSale, setCurrentSale] = useState([])
const [cartTotal, setCartTotal] = useState(0)


  return (
    <div className="App">
    
    <GlobalStyles/>
        <Home/>
    </div>
  );
}

export default App;
