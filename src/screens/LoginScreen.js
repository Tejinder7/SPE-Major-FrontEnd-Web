import Card from "../components/UI/Card";
import classes from "./Login.module.css";

import LoginForm from "../components/Forms/LoginForm";
import { Fragment, useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import LoginController from "../controllers/LoginController";
import Header from "../components/Layout/Header";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password, role }) {
    setIsAuthenticating(true);
    try {
      const response = await LoginController.GetUserLoginData(
        email,
        password,
        role
      );
      authCtx.authenticate(response.token, response.authId, role);
      console.log(response.token);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      setIsAuthenticating(false);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <h2>Logging you in</h2>;
  }

  return (
    <Fragment>
      <Header />
      <section className={classes.login}>
        <Card>
          <LoginForm onAuthenticate={loginHandler} />
        </Card>
      </section>
    </Fragment>
  );
};

export default LoginScreen;
