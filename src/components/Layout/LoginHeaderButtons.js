import Button from "../UI/Button";
import classes from "./HeaderButtons.module.css";

const LoginHeaderButtons = () => {
  return (
    <div className={classes.actions}>
      <Button message="Logout" />
    </div>
  );
};

export default LoginHeaderButtons;
