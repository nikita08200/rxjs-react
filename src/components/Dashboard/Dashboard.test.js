import React from "react";
import { waitFor } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

it("Dashboard", async () => {
  render(<Dashboard />);

  const mockFn = jest.fn();
  mockFn();

  await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1));

  mockFn();

  await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(2));

  screen.debug();
});
