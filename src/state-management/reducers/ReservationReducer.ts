import { createSlice } from "@reduxjs/toolkit";
import { getFilterReservation, getUpcomingReservations } from "helpers/utils";
import { FilterReservation, Reservation } from "models";
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
  reducers: {
    applyReservationFilter: (
      state: ReservationState,
      { payload }: { payload: FilterReservation }
    ) => {
      state.filteredReservation = getFilterReservation(
        state.reservations,
        payload
      );
    },
    clearReservsationFilter: (
        state: ReservationState,
      ) => {
        state.filteredReservation = getUpcomingReservations(
          state.reservations,
        );
      },
  },
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
const { applyReservationFilter,clearReservsationFilter } = reservationReducer.actions;
export { applyReservationFilter ,clearReservsationFilter};

export default reservationReducer.reducer;
