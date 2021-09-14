import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import { CartContext } from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfItems = cartContext.items.reduce((previousValue, item) => {
    return previousValue + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export { HeaderCartButton };
