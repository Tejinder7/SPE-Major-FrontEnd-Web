import axios from "axios";

const serverURL = `http://localhost:9191/`;

const hitPostService = async (props) => {
  const url = serverURL + props.childURL;

  console.log(url);

  const header = props.header;

  const response = await axios.post(url, props.postData, header);
  console.log(response);

  return response;
};

const hitGetService = async (props) => {
  const url = serverURL + props.childURL;

  const header = props.header;

  console.log("URL Hitting in GlobalServiceHandler in Get Service Call");
  console.log(url);

  const response = await axios.get(url, header);

  console.log("Data recieved");
  console.log(response);

  return response;
  // try {

  //   if (response.status === 200) {
  //     props.responseDataHandler({
  //       responseData: response,
  //       responseError: null,
  //     });
  //   } else {
  //     props.responseDataHandler({
  //       responseData: response,
  //       responseError: null,
  //     });
  //   }
  // } catch (error) {
  //   props.responseDataHandler({
  //     responseData: null,
  //     responseError: error,
  //   });
  // }
};

const GlobalService = {
  hitPostService,
  hitGetService,
};
export default GlobalService;
