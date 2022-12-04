import { Reservation } from "models";
import { dateFormatter } from "./dateFormatter";

const getUpcommingReservations = (reservations: Reservation[]) => {
  const currentDate = new Date();
  return reservations
    .filter((reservation) => {
      if (
        currentDate <= new Date(reservation.start) ||
        currentDate <= new Date(reservation.end)
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
export default getUpcommingReservations;
