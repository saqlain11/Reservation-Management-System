import { reservations } from "__fixtures__/all-reservation-response";
import { dateFormatter } from "./dateFormatter";
import getUpcomingReservations from "./getUpcomingReservations";

describe("getUpcomingReservations Suite", () => {
  let updatedReservationDate;
  beforeAll(() => {
    updatedReservationDate = [
      {
        ...reservations[1],
        start: dateFormatter(reservations[1].start),
        end: dateFormatter(reservations[1].end),
      },
    ];
  });
  it("should get the upcoming reservations", () => {
    const upcomingReservations = getUpcomingReservations(reservations);
    expect(upcomingReservations).toEqual(updatedReservationDate);
  });
});
