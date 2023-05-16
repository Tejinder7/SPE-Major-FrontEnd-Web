import classes from "./ListItem.module.css";

const DishItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.category}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default DishItem;
