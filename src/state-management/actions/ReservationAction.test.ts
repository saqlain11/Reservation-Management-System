import { allReservation } from "./ReservationAction";
import { fetcher } from "helpers/utils";
import { reservations } from "__fixtures__/all-reservation-response";
jest.mock("helpers/utils/fetcher");

const mockFetcher = fetcher as jest.Mock;

describe("Reservation Action Suite", () => {
  it("should get all reservations successfully", async () => {
    const data = { status: 200, data: reservations };
    mockFetcher.mockResolvedValue(data);
    const dispatch = jest.fn();
    const thunk = allReservation();
    const response = await thunk(dispatch, undefined, undefined);
    expect(dispatch).toHaveBeenCalledTimes(2); //two times because 1 is for pending and second for fullfiled
    expect(response.payload).toEqual(data);
  });
  it("should get error and throw an excpetion", async () => {
    mockFetcher.mockRejectedValue({ status: 500, data: undefined });
    const dispatch = jest.fn();
    const thunk = allReservation();
    await thunk(dispatch, undefined, undefined);
    expect(dispatch).toHaveBeenCalledTimes(2); //two times because 1 is for pending and second for rejected
  });
});
