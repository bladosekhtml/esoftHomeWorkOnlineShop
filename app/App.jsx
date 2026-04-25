import Home from "../pages/Home";
import './App.css';

import { products } from '../data/data';

import { ProductsContext } from '../src/context/ProductsContext';

function App() {
  return (
    <ProductsContext.Provider value={products}>
      <Home />
    </ProductsContext.Provider>
  );
};

export default App;
