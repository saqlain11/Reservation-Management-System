import { area, shift, status } from "./Reservation";

export default interface FilterReservation {
  fullName?: string;
  status?: status;
  area?: area;
  shift?: shift;
  date?: string;
}
