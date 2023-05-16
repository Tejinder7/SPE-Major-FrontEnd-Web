import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import GlobalService from "../util/GlobalService";

const fetchFoodCourts = async (props) => {
  const childURL = "superAdmin/allFoodCourts";
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

const SuperAdminController = { fetchFoodCourts };
export default SuperAdminController;
