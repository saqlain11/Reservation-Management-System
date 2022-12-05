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
];
