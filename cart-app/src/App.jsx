import { useState } from "react";
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const products = [
  { id: 1, name: 'LAPTOP DELL', price: 800.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBCF9L7ZdnbCJ_01CVkBsX_lUXRTkWc0GIw&s' },
  { id: 2, name: 'LAPTOP HP', price: 1599.99, image: 'https://computodo.com.sv/wp-content/uploads/2024/08/HP-14-dq0532la-Notebook-14-1.png' },
  { id: 3, name: 'LAPTOP RAZER', price: 750.99, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
];



function App(){
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Carrito de Compras</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
