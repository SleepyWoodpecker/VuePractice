import axios from "axios";
import { LoginDetails } from "./types";

interface LoginSuccessResponse {
  token: string;
}

interface LoginFailResponse {
  error: string;
}

export const login = async (
  loginDetails: LoginDetails
): Promise<LoginSuccessResponse | LoginFailResponse> => {
  const { data } = await axios.post<LoginSuccessResponse | LoginFailResponse>(
    "https://reqres.in/api/login",
    loginDetails
  );
  return data;
};
