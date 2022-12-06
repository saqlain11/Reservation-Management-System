import getFilterReservations from "./getFilterReservations";
import { reservations } from "__fixtures__/all-reservation-response";
import { FilterReservation, Reservation } from "models";
import { dateFormatter } from "./dateFormatter";

describe("getFilterReservations Suite", () => {
  let filterReservation: FilterReservation;
  let updatedReservationDate;
  beforeAll(() => {
    updatedReservationDate = [
      {
        ...reservations[0],
        start: dateFormatter(reservations[0].start),
        end: dateFormatter(reservations[0].end),
      },
    ];
  });
  it("should return empty array when no filter is selected", () => {
    const filterReservations = getFilterReservations(reservations, {});
    expect(filterReservations).toEqual([]);
  });

  it("should return filterd reservations by name & surename", () => {
    filterReservation = { fullName: "Yuri" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual(updatedReservationDate);
  });

  it("should return filterd reservations by area", () => {
    filterReservation = { area: "BAR" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual(updatedReservationDate);
  });

  it("should return filterd reservations by shift", () => {
    filterReservation = { shift: "BREAKFAST" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual(updatedReservationDate);
  });

  it("should return filterd reservations by status", () => {
    filterReservation = { status: "CHECKED OUT" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual(updatedReservationDate);
  });

  it("should return filterd reservations by date", () => {
    filterReservation = {
      date: new Date(reservations[0].start).toLocaleDateString("en-GB"),
    };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );

    expect(filterReservations).toEqual(updatedReservationDate);
  });
});
