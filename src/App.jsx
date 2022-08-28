import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/ProductPage';
import { Navbar } from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { NotFound } from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProductPage /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
