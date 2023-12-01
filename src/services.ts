import axios, { isAxiosError } from "axios";
import { LoginDetails } from "./types";

export const login = async (loginDetails: LoginDetails) => {
  try {
    const { data } = await axios.post(
      "https://reqres.in/api/login",
      loginDetails
    );
    return data;
  } catch (e) {
    if (isAxiosError(e) && e.status === 400) {
      return e.response?.data;
    } else {
      return { error: "Something went wrong, please try again" };
    }
  }
};
