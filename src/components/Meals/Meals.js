import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Switch from "./Switch";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      {/* <Switch /> */}
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
