import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$ ${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartContext.addItem({...item, amount: 1});
  }
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} disabled={!hasItems}>
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
