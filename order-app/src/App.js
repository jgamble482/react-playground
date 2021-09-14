import { Header } from "./components/Layout/Header";
import "./App.css";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartContext from "./store/cartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContext>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
