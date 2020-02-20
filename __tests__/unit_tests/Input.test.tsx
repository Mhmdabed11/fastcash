import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "../../components/shared/Input/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";

describe("Test error element", () => {
  test("Error element renders when error prop is supplied", () => {
    const { queryByTestId } = render(
      <Input
        name="firstName"
        iconLeft={faUser}
        placeholder={"First Name"}
        error="Required"
        value=""
        onChange={e => {}}
      />
    );

    expect(queryByTestId(/error/i).innerHTML).toBe("Required");
  });

  test("Error element doesn't render when error prop is not supplied", () => {
    const { queryByTestId } = render(
      <Input
        name="firstName"
        iconLeft={faUser}
        placeholder={"First Name"}
        value=""
        onChange={e => {}}
      />
    );
    expect(queryByTestId(/error/i)).toBeNull();
  });
});
