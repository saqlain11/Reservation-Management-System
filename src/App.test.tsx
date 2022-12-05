import { render } from "@testing-library/react";

import App from "./App";

describe("Main entry point suite", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
