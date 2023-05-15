import React from "react";

import backgroundImage from "../../assets/background.jpg";
import classes from "./Header.module.css";
import Button from "../UI/Button";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Bawarchi</h1>
        <div className={classes.actions}>
          {/* <button className={classes.button}>View Orders</button> */}
          <Button message="Add Dish" />
          <Button message="View Orders" />
          <Button message="Logout" />
          {/* <button className={classes.button}>Add Dishes</button> */}
          {/* <button className={classes["button--alt"]}>Logout</button> */}
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={backgroundImage} alt="Delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
