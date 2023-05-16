import GlobalService from "../util/GlobalService";

const GetUserLoginData = async (email, password, role) => {
  const postData = {
    username: email,
    password: password,
    role: role,
  };

  var childURL = "login/";

  const response = await GlobalService.hitPostService({
    childURL: childURL,
    postData: postData,
  });

  console.log("Is the response correct");
  console.log(response);

  return response.data.token;
};

const LoginController = { GetUserLoginData };
export default LoginController;