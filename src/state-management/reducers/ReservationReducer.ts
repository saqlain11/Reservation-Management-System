import { createSlice } from "@reduxjs/toolkit";
import { dateFormatter, getUpcomingReservations } from "helpers/utils";
import { Reservation } from "models";
import { allReservation } from "state-management/actions";

interface ReservationState {
  isLoading: boolean;
  reservations: Reservation[];
  filteredReservation: Reservation[];
  successMessage: string;
  errorMessage: string;
}
const initialReservationState: ReservationState = {
  isLoading: false,
  reservations: [],
  filteredReservation: [],
  successMessage: "",
  errorMessage: "",
};
const reservationReducer = createSlice({
  name: "Reservation",
  initialState: initialReservationState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(allReservation.pending, (state: ReservationState) => {
      state.isLoading = true;
    });
    builder.addCase(
      allReservation.fulfilled,
      (state: ReservationState, { payload }: { payload: Reservation[] }) => {
        state.isLoading = false;
        state.reservations = payload;
        state.filteredReservation = getUpcomingReservations(payload);
      }
    );

    builder.addCase(
      allReservation.rejected,
      (state: ReservationState, { payload }: { payload: unknown }) => {
        state.isLoading = false;
        state.errorMessage = payload as string;
      }
    );
  },
});
export default reservationReducer.reducer;
