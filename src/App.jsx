import logo from './logo.svg';
import './App.css';
import { ProductPage } from './components/ProductPage';
import {Routes,Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
