import { Fragment, useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import AppSummary from "../components/Meals/AppSummary";
import DishItem from "../components/Meals/ListItems/DishItem";
import AddDishOverlay from "../components/Overlay/AddDishOverlay";
import Card from "../components/UI/Card";
import RestaurantController from "../controllers/RestaurantController";

import classes from "./SuperAdminScreen.module.css";

const RestaurantScreen = () => {
  const [dishes, setDishes] = useState([]);
  const [showDishOverlay, setDishOverlay] = useState(false);

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

  const showDishOverlayHandler = () => {
    setDishOverlay(true);
  };

  const removeDishOverlayHandler = () => {
    setDishOverlay(false);
  };

  return (
    <Fragment>
      <Header
        role="ROLE_RESTAURANT"
        onActivate={showDishOverlayHandler}
      />
      {showDishOverlay && <AddDishOverlay onCancel={removeDishOverlayHandler}/>}
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
