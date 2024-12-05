import products from "./products";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function handleAddCart(product) {
    setCart([...cart, product]);
  }
  return (
    <div>
      <header className="main-header"> Shop easy </header>

      <Cart cart={cart} />

      <ProductList product={products} onAddCart={handleAddCart} />
    </div>
  );
}

function ProductList({ product, onAddCart }) {
  return (
    <div className="display-products">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} onAddCart={onAddCart} />
      ))}
    </div>
  );
}

function ProductCard({ product, onAddCart }) {
  return (
    <div className="content-area">
      <img className="image" src={product.image} alt={product.name} />

      <h2>{product.name}</h2>
      <h3> ${product.price}</h3>
      <button onClick={() => onAddCart(product)}>Add to Cart</button>
    </div>
  );
}

function Cart({ cart }) {
  const totalSum = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart-container">
      <h2>SHOPPING CART</h2>
      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        cart.map((item, index) => (
          <div key="index" className="cart">
            {item.name} - {item.price}
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div>
          <h3>Total: ${totalSum} </h3>
        </div>
      )}
      ;
    </div>
  );
}
