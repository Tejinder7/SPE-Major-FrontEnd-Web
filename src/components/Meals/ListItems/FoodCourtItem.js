import classes from "./ListItem.module.css";

const FoodCourtItem = (props) => {
  // const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {/* <div className={classes.description}>{props.description}</div> */}
        <div className={classes.description}>{props.description}</div>
      </div>
      <div></div>
    </li>
  );
};

export default FoodCourtItem;
