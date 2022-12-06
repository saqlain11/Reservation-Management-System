import { Reservation } from "models";

export const reservations: Reservation[] = [
  {
    id: 1,
    businessDate: "06.08.2022",
    status: "CHECKED OUT",
    shift: "BREAKFAST",
    start: "2022-08-06T08:00:00Z",
    end: "2022-08-06T09:00:00Z",
    quantity: 1,
    customer: {
      firstName: "Yuri",
      lastName: "Burchell",
    },
    area: "BAR",
    guestNotes: "Likes the blue cheese burguer",
  },
  {
    id: 2,
    businessDate: "06.01.2023",
    status: "NOT CONFIRMED",
    shift: "DINNER",
    start: "2023-01-06T08:00:00Z",
    end: "2023-01-06T09:00:00Z",
    quantity: 2,
    customer: {
      firstName: "Arvie",
      lastName: "Thurlbourne",
    },
    area: "MAIN ROOM",
    guestNotes: "",
  },
];
