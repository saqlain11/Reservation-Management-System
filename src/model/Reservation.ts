type status = "CONFIRMED" | "NOT CONFIRMED" | "SEATED" | "CHECKED OUT";
type area = "BAR" | "MAIN ROOM";
type shift = "BREAKFAST" | "LUNCH" | "DINNER";
interface Reservation {
  id: number;
  businessDate: string;
  status: status;
  shift: shift;
  start: Date;
  end: Date;
  quantity: number;
  area: area;
  customer: Customer;
  guestNotes: string;
}
interface Customer {
  firstName: string;
  lastName: string;
}
export default Reservation;
