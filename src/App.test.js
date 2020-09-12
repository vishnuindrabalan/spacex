import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Spacex", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
