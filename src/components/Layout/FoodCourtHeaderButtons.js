import Button from "../UI/Button";
import classes from "./HeaderButtons.module.css";

const FoodCourtHeaderButtons = () => {
  return (
    <div className={classes.actions}>
      <Button message="Add Restaurant" />
      <Button message="Logout" />
    </div>
  );
};

export default FoodCourtHeaderButtons;
