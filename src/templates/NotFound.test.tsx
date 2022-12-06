import { fireEvent, render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("Page Not Found Suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = render(<NotFound />);
  });
  it("should render correctly", () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it("should click on the button to go back to page", () => {
    const backPageBtn = screen.getByTestId("backPage");
    fireEvent.click(backPageBtn);
    expect(backPageBtn).toBeInTheDocument();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
