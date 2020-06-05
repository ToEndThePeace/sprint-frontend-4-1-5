import axios from "axios";

export const axiosWithConfig = () => {
  return axios.create({
    baseURL: "https://sprint-backend-4-1-5.herokuapp.com/",
  });
};
