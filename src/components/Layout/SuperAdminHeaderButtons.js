import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import Button from "../UI/Button";
import classes from "./HeaderButtons.module.css";

const SuperAdminHeaderButtons = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className={classes.actions}>
      <Button message="Add Food Court" />
      <Button message="Logout" type="button" onPress={logoutHandler} />
    </div>
  );
};

export default SuperAdminHeaderButtons;
