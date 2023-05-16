import classes from "./ListItem.module.css";

const RestaurantItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        {/* <div className={classes.description}>{props.description}</div> */}
        <div className={classes.price}>{props.contact}</div>
      </div>
      <div></div>
    </li>
  );
};

export default RestaurantItem;
