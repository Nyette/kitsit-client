import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("The home page renders", () => {
  render(<App />);
  const heading = screen.getByText(/KitSit/i);
  expect(heading).toBeInTheDocument();
});
