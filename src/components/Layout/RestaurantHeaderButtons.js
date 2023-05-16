import Button from "../UI/Button";
import classes from "./HeaderButtons.module.css";

const RestaurantHeaderButtons = () => {
  return (
    <div className={classes.actions}>
      <Button message="Add Dish" />
      <Button message="View Orders" />
      <Button message="Logout" />
    </div>
  );
};

export default RestaurantHeaderButtons;
