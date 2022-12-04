import { configureStore } from "@reduxjs/toolkit";
import { reservationReducer } from "state-management/reducers";

const store = configureStore({
  reducer: {
    Reservation: reservationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
