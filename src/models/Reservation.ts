export type status = "CONFIRMED" | "NOT CONFIRMED" | "SEATED" | "CHECKED OUT";
export type area = "BAR" | "MAIN ROOM";
export type shift = "BREAKFAST" | "LUNCH" | "DINNER";
export default interface Reservation {
  id: number;
  businessDate: string;
  status: status;
  shift: shift;
  start: string;
  end: string;
  quantity: number;
  area: area;
  customer: Customer;
  guestNotes: string;
}
interface Customer {
  firstName: string;
  lastName: string;
}
