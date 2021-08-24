import classes from './Meal.module.css';

const Meal = (props) => {
    return <>
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.price}>{props.description}</div>
                <div className={classes.description}>{props.price}</div>
            </div>
            <div></div>
        </li>
    </>
}

export default Meal