import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/slices/counter';

const Counter = () => {
  const counter = useSelector(state => state.counter.count); 
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch() 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
