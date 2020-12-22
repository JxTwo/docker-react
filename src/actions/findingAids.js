import axios from "axios";
import { GET_FINDINGAIDS } from "./types";

// Get Finding Aids - example of a simple get request to an api endpoint
export const getFindingAids = () => (dispatch) => {
  axios
    .get("http://0.0.0.0:8001/api/finding_aids/")
    .then((response) => {
      dispatch({
        type: GET_FINDINGAIDS,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
