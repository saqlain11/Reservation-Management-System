import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "helpers/utils";
import { Reservation } from "models";

const allReservation = createAsyncThunk(
  "Reservation/allReservation",
  async (_, { rejectWithValue }) => {
    try {
      const url =process.env.REACT_APP_RESERVATION_OPERATION;
      const data: Reservation[] = await fetcher({ url });
      return data;
    } catch (error: unknown) {
      return rejectWithValue("internal server Error");
    }
  }
);
export { allReservation };
