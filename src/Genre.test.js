import { screen, render } from "@testing-library/react";
import Genre from "./Genre";

describe("Genre", () => {
  it("renders nothing without `id`", () => {
    render(<Genre />);
    expect(screen.queryByTestId("genre")).not.toBeInTheDocument();
  });
  it("renders nothing wrong `id`", () => {
    render(<Genre id="9999999" />);
    expect(screen.queryByTestId("genre")).not.toBeInTheDocument();
  });
  it("renders `Science Fiction` with id `53`", () => {
    render(<Genre id="53" />);
    expect(screen.getByText("Science Fiction")).toBeInTheDocument();
  });
});
