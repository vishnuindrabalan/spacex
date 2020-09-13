import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders Spacex", () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = getByText(/SpaceX Launch Programs/i);
  expect(linkElement).toBeInTheDocument();
});
