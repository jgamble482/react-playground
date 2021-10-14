import { cartActions } from '../../store/slices/cartSlice';
import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { name, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();
  const addItemHamdler = () => {
    dispatch(cartActions.addItem({name, price, id}));
  }
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHamdler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
