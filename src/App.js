import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Contacto from './pages/zContacto/Contacto';
import Pedidos from './pages/zPedido/Pedidos';
import Ofertas from './pages/zOfertas/Ofertas';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          {/* Botón de logo y Productos */}
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/products" element={<ItemListContainer/>} />

          {/* Opción de cada categoría */}
          <Route path="/category/:category" element={<ItemListContainer/>} />

          {/* Detalle de un item */}
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          
          
          {/* Para después */}
          <Route path="cart" element={<Cart/>} />
          <Route path="ofertas" element={<Ofertas/>} />
          <Route path="pedidos" element={<Pedidos/>} />
          <Route path="contacto" element={<Contacto/>} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
