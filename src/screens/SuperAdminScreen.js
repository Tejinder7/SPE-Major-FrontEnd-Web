import classes from "./SuperAdminScreen.module.css";

import Card from "../components/UI/Card";
import { Fragment, useEffect, useState } from "react";
import AppSummary from "../components/Meals/AppSummary";
import SuperAdminController from "../controllers/SuperAdminController";
import FoodCourtItem from "../components/Meals/ListItems/FoodCourtItem";

const SuperAdminScreen = () => {
  const [foodCourts, setFoodCourts] = useState([]);

  useEffect(() => {
    async function getFoodCourts() {
      try {
        const response = await SuperAdminController.fetchFoodCourts();
        console.log(response);
        setFoodCourts(response);
      } catch (error) {
        alert(error.response.message);
      }
    }
    getFoodCourts();
  }, []);

  const foodCourtList = foodCourts.map((foodCourt) => (
    <FoodCourtItem
      key={foodCourt.authId}
      name={foodCourt.name}
      description={foodCourt.address}
    />
  ));

  return (
    <Fragment>
      <AppSummary />
      <section className={classes.meals}>
        <Card>
          <ul>{foodCourtList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default SuperAdminScreen;
