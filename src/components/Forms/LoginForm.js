import { Fragment } from "react";
import Button from "../UI/Button";
import Dropdown from "../UI/Dropdown";
import FormInput from "../UI/FormInput";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const updateChangeHandler = (enteredText) => {
    console.log(enteredText);
  };

  return (
    <Fragment>
      <form>
        <section className={classes.title}>
          <h2>Login</h2>
        </section>
        <FormInput
          field="email"
          label="Email"
          type="text"
          id="email"
          onUpdate={updateChangeHandler}
        />
        <FormInput
          field="password"
          label="Password"
          type="password"
          id="password"
          onUpdate={updateChangeHandler}
        />
        <Dropdown
          field="userType"
          label="User Type"
          id="userType"
          onUpdate={updateChangeHandler}
        />
        <div className={classes.actions}>
          <Button message="Login" />
        </div>
      </form>
    </Fragment>
  );
};

export default LoginForm;
