import GlobalService from "../util/GlobalService";

const fetchDishes = async (props) => {
  const restaurantId = localStorage.getItem("userId");
  const childURL = `restaurant/${restaurantId}/fetchDishes`;
  const token = localStorage.getItem("token");

  console.log("Sending token");
  console.log(token);

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await GlobalService.hitGetService({
    childURL: childURL,
    header: header,
  });

  console.log("Is the response correct");
  console.log(response);

  return response.data;
};

const RestaurantController = { fetchDishes };
export default RestaurantController;
