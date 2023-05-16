import Card from "../components/UI/Card";
import classes from "./Login.module.css";

import Button from "../components/UI/Button";
import LoginForm from "../components/Forms/LoginForm";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password, role }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password, role);
      authCtx.authenticate(token, email, role);
      console.log(token);
    } catch (error) {
      <h2>An error occured</h2>;
      setIsAuthenticating(false);
    }
    console.log("Ho  gaya login bhenchod");
  }

  if (isAuthenticating) {
    return <h2>Logging you in</h2>;
  }

  return (
    <section className={classes.login}>
      <Card>
        <LoginForm onAuthenticate={loginHandler} />
      </Card>
    </section>
  );
};

export default LoginScreen;
