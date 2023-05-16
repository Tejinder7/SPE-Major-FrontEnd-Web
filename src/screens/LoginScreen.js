import Card from "../components/UI/Card";
import classes from "./Login.module.css";

import LoginForm from "../components/Forms/LoginForm";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import LoginController from "../controllers/LoginController";

const LoginScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password, role }) {
    setIsAuthenticating(true);
    try {
      const token = await LoginController.GetUserLoginData(
        email,
        password,
        role
      );
      authCtx.authenticate(token, email, role);
      console.log(token);
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
    <section className={classes.login}>
      <Card>
        <LoginForm onAuthenticate={loginHandler} />
      </Card>
    </section>
  );
};

export default LoginScreen;
