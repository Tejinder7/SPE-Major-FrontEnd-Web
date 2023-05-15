import classes from "./FormInput.module.css";

const FormInput = (props) => {
  return (
    <div className={classes.control}>
      <label htmlFor={props.formType}>{props.label}</label>
      <input type={props.type} id={props.id} />
    </div>
  );
};

export default FormInput;
