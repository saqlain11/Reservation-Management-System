import fetcher from "./fetcher";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
import { API_MESSAGES } from "helpers/constants";
jest.mock("axios");

interface AxiosMock extends AxiosStatic {
  mockResolvedValue: (response: AxiosResponse) => void;
  mockRejectedValue: (error: unknown) => void;
}
const mockAxios = axios as AxiosMock;

describe("Fetcher Suite", () => {
  const response: any = {
    status: 200,
    data: {
      statusMessage: "success",
    },
  };
  const options: AxiosRequestConfig = {
    url: "anyURL",
    method: "GET",
  };
  it("should call API successfully!", async () => {
    mockAxios.mockResolvedValue(response);
    const result = await fetcher(options);
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({ ...options });
    expect(result).toEqual(response.data);
  });
  it("should API failed", async () => {
    mockAxios.mockRejectedValue(API_MESSAGES.INTERNAL_SERVER_ERROR);
    await expect(fetcher(options)).rejects.toEqual(
      API_MESSAGES.INTERNAL_SERVER_ERROR
    );
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({ ...options });
  });
});
