import GlobalService from "../util/GlobalService";

const fetchRestaurants = async (props) => {
  const foodCourtId = localStorage.getItem("userId");
  const childURL = `foodCourt/${foodCourtId}/allRestaurants`;
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

const FoodCourtController = { fetchRestaurants };
export default FoodCourtController;
