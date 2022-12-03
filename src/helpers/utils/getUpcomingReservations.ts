import { Reservation } from "models";
import { dateFormatter } from "./dateFormatter";

const getUpcommingReservations = (reservations: Reservation[]) => {
  const currentDate = new Date().toLocaleDateString("en-GB");
  return reservations.map((reservation) => {
    reservation = {
      ...reservation,
      start: dateFormatter(reservation.start),
      end: dateFormatter(reservation.end),
    };
    return reservation;
  });
};
export default getUpcommingReservations;
