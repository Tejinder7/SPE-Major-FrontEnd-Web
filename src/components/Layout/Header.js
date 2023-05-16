import React from "react";

import backgroundImage from "../../assets/background.jpg";
import FoodCourtHeaderButtons from "./FoodCourtHeaderButtons";
import classes from "./Header.module.css";
import RestaurantHeaderButtons from "./RestaurantHeaderButtons";
import SuperAdminHeaderButtons from "./SuperAdminHeaderButtons";

const Header = (props) => {
  let headerContent = <></>;

  if (props.role === "ROLE_SUPER_ADMIN") {
    headerContent = <SuperAdminHeaderButtons />;
  }

  if (props.role === "ROLE_FOOD_COURT") {
    headerContent = <FoodCourtHeaderButtons />;
  }

  if (props.role === "ROLE_RESTAURANT") {
    headerContent = <RestaurantHeaderButtons />;
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Bawarchi</h1>
        {headerContent}
      </header>
      <div className={classes["main-image"]}>
        <img src={backgroundImage} alt="Delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
