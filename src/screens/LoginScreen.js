import Card from "../components/UI/Card";
import classes from "./Login.module.css";

import Button from "../components/UI/Button";
import LoginForm from "../components/Forms/LoginForm";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      // const token = await login(email, password);
      // authCtx.authenticate(token);
    } catch (error) {
      // Alert.alert(
      //   "Authentication failed!",
      //   "Could not log you in, please check your credentials or try again later"
      // );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <h2>Logging you in</h2>;
  }

  return (
    <section className={classes.login}>
      <Card>
        <LoginForm />
      </Card>
    </section>
  );
};

export default LoginScreen;
