import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_MESSAGES } from "helpers/constants";
import { Reservation } from "models";

const fetcher = async (options: AxiosRequestConfig): Promise<Reservation[]> => {
  try {    
    const response: AxiosResponse = await axios({ ...options });
    return response.data;
  } catch (error: unknown) {
    console.log("API Error", error);
    throw API_MESSAGES.INTERNAL_SERVER_ERROR;
  }
};
export default fetcher;
