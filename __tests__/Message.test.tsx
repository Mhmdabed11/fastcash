import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Message from "../components/shared/Message/Message";

describe("Test error message", () => {
  test("error message appears when error prop is supplied", () => {
    const { queryByTestId } = render(<Message type="danger" message="Error" />);
    expect(queryByTestId(/messageBody/i).innerHTML).toBe("Error");
  });
});
