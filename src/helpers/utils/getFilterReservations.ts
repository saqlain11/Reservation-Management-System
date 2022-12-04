import { FilterReservation, Reservation } from "models";
import { dateFormatter } from "./dateFormatter";

const getFilterReservation = (
  reservations: Reservation[],
  filter: FilterReservation
): Reservation[] => {
  return reservations
    .filter((reservation) => {
      if (
        (filter.fullName &&
          `${reservation.customer.firstName} ${reservation.customer.lastName}`.toLowerCase().includes(
            filter.fullName.toLowerCase()
          )) ||
        filter.status === reservation.status ||
        filter.area === reservation.area ||
        filter.shift === reservation.shift ||
        filter.date === new Date(reservation.start).toLocaleDateString("en-GB")
      )
        return reservation;
    })
    .map((reservation) => {
      reservation = {
        ...reservation,
        start: dateFormatter(reservation.start),
        end: dateFormatter(reservation.end),
      };
      return reservation;
    });
};
export default getFilterReservation;
