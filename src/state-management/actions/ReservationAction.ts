import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_MESSAGES } from "helpers/constants";
import { fetcher } from "helpers/utils";
import { Reservation } from "models";

const allReservation = createAsyncThunk(
  "Reservation/allReservation",
  async (_, { rejectWithValue }) => {
    try {
      const url = process.env.REACT_APP_RESERVATION_OPERATION;
      const data: Reservation[] = await fetcher({ url });
      return data;
    } catch (error: unknown) {
      return rejectWithValue(API_MESSAGES.INTERNAL_SERVER_ERROR);
    }
  }
);
export { allReservation };
