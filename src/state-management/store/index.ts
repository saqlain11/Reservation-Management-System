import { configureStore } from "@reduxjs/toolkit";
import { reservationReducer } from "state-management/reducers";

const store = configureStore({
  reducer: {
    Reservation: reservationReducer,
  },
});
export default store;
