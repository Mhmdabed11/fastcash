import * as React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";

describe("Test error element", () => {
  test("Error element renders when error prop is supplied", () => {
    const { queryByTestId } = render(
      <Input
        id="firstName"
        iconLeft={faUser}
        placeholder={"First Name"}
        error="Required"
      />
    );

    expect(queryByTestId(/error/i).innerHTML).toBe("Required");
  });

  test("Error element doesn't render when error prop is not supplied", () => {
    const { queryByTestId } = render(
      <Input id="firstName" iconLeft={faUser} placeholder={"First Name"} />
    );
    expect(queryByTestId(/error/i)).toBeNull();
  });
});
