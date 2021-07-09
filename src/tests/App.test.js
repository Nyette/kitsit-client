import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders", () => {
  render(<App />);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
