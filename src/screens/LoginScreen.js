import Card from "../components/UI/Card";
import classes from "./Login.module.css";

import Button from "../components/UI/Button";

const LoginScreen = () => {
  return (
    <section className={classes.login}>
      <Card>
        <form>
          <section className={classes.title}>
            <h2>Login</h2>
          </section>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          {/* <div className={classes.control}>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" />
          </div> */}
          {/* <div className={classes.control}>
      <label htmlFor="city">City</label>
      <input type="text" id="city" />
    </div> */}
          <div className={classes.actions}>
            {/* <button className={classes.button}>View Orders</button> */}
            <Button message="Login" />{" "}
          </div>
        </form>
      </Card>
    </section>
  );
};

export default LoginScreen;
