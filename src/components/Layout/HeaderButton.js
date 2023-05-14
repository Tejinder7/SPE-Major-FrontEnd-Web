import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  return (
    <button className={classes.button}>
      <span>Add Dishes</span>
    </button>
  );
};

export default HeaderButton;
