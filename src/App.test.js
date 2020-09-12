import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Spacex", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Spacex project first build test/i);
  expect(linkElement).toBeInTheDocument();
});
