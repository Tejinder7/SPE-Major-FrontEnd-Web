import Button from "../UI/Button";
import classes from "./HeaderButtons.module.css";

const SuperAdminHeaderButtons = () => {
  return (
    <div className={classes.actions}>
      <Button message="Add Food Court" />
      <Button message="Logout" />
    </div>
  );
};

export default SuperAdminHeaderButtons;
