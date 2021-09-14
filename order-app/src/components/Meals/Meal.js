import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.price}>{props.description}</div>
          <div className={classes.description}>{props.price}</div>
        </div>
        <div>
          <MealItemForm onAddItem={addItemHandler} id={props.id} />
        </div>
      </li>
    </>
  );
};

export default Meal;
