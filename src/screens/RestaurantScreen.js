import { Fragment, useEffect, useState } from "react";
import AppSummary from "../components/Meals/AppSummary";
import DishItem from "../components/Meals/ListItems/DishItem";
import Card from "../components/UI/Card";
import RestaurantController from "../controllers/RestaurantController";

import classes from "./SuperAdminScreen.module.css"

const RestaurantScreen = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getDishes() {
      try {
        const response = await RestaurantController.fetchDishes();
        console.log(response);
        setDishes(response);
      } catch (error) {
        alert(error.response.message);
      }
    }
    getDishes();
  }, []);

  const dishList = dishes.map((dish) => (
    <DishItem
      key={dish.id}
      name={dish.name}
      price={dish.price}
      category={dish.category}    
      />
  ));

  return (
    <Fragment>
      <AppSummary />
      <section className={classes.meals}>
        <Card>
          <ul>{dishList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default RestaurantScreen;
