import getFilterReservations from "./getFilterReservations";
import { reservations } from "__fixtures__/all-reservation-response";
import { FilterReservation } from "models";

describe("getFilterReservations Suite", () => {
  let filterReservation: FilterReservation ;
  //TODO: We could add more test cases with different filters but for now just added one case only
  it("should return empty array when no filter is selected", () => {
    const filterReservations = getFilterReservations(
      reservations,
      {}
    );
    expect(filterReservations).toEqual([]);
  });
  
  it("should return filterd reservations by name & surename", () => {
    filterReservation={ fullName: "Yuri" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual([filterReservations[0]]);
  });

  it("should return filterd reservations by area", () => {
    filterReservation = { area: "BAR" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual([filterReservations[0]]);
  });

  it("should return filterd reservations by shift", () => {
    filterReservation = { shift: "BREAKFAST" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual([filterReservations[0]]);
  });

  it("should return filterd reservations by status", () => {
    filterReservation = { status: "CHECKED OUT" };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual([filterReservations[0]]);
  });

  it("should return filterd reservations by date", () => {
    filterReservation = { date:new Date(reservations[0].start).toLocaleDateString("en-GB")  };
    const filterReservations = getFilterReservations(
      reservations,
      filterReservation
    );
    expect(filterReservations).toEqual([filterReservations[0]]);
  });

});
