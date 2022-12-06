import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import AllReservation from "./AllReservations";
import store from "state-management/store";
import { useAppSelector, useAppDispatch } from "hooks";
const mockUseAppSelector = useAppSelector as jest.Mock;
const mockUseAppDispatch = useAppDispatch as jest.Mock;

jest.mock("hooks");

describe("All Reservations Suite", () => {
  let wrapper;
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    mockUseAppSelector.mockImplementation((callback) => {
      return callback({
        Reservation: { filteredReservation: [], isLoading: false },
      });
    });
    mockUseAppDispatch.mockImplementation(() => jest.fn());
    wrapper = render(
      <Provider store={store}>
        <AllReservation />
      </Provider>
    );
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should render correctly", () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
