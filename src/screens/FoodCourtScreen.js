import { Fragment, useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import AppSummary from "../components/Meals/AppSummary";
import RestaurantItem from "../components/Meals/ListItems/RestaurantItem";
import Card from "../components/UI/Card";
import FoodCourtController from "../controllers/FoodCourtController";

import classes from "./SuperAdminScreen.module.css";

const FoodCourtScreen = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const response = await FoodCourtController.fetchRestaurants();
        console.log(response);
        setRestaurants(response);
      } catch (error) {
        alert(error.response.message);
      }
    }
    getRestaurants();
  }, []);

  const restaurantList = restaurants.map((restaurant) => (
    <RestaurantItem
      key={restaurant.id}
      name={restaurant.name}
      contact={restaurant.contact}
    />
  ));

  return (
    <Fragment>
      <Header role="ROLE_FOOD_COURT" />
      <AppSummary />
      <section className={classes.meals}>
        <Card>
          <ul>{restaurantList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default FoodCourtScreen;
