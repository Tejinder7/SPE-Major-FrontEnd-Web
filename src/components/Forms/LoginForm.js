import { Fragment } from "react";
import FormInput from "../UI/FormInput";

const LoginForm = () => {
  return (
    <Fragment>
      <FormInput field="email" label="Email" type="text" id="email" />
      <FormInput
        field="password"
        label="Password"
        type="password"
        id="password"
      />
    </Fragment>
  );
};

export default LoginForm;
