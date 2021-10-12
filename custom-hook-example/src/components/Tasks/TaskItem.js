import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  return <li className={classes.task}>{props.text}</li>
};

export default TaskItem;