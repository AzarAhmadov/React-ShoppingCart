import Home from './components/home/Home';
import './css/App.css';
import { CartProvider } from 'react-use-cart';
import Cart from './components/home/Cart';
function App() {
  return (
    <div className="App">
      <CartProvider>
        <h1> All Items <i class="fa-solid fa-basket-shopping"></i> </h1>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
