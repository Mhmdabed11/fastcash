import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BaseButton from "./BaseButton";
import { faUser } from "@fortawesome/free-solid-svg-icons";

describe("Test BaseButton", () => {
  test("Button text renders correctly", () => {
    const { getByRole } = render(
      <BaseButton onClick={() => {}}>Login</BaseButton>
    );
    const button = getByRole("button");
    expect(button.innerHTML).toBe("Login");
  }),
    test("Button text renders correctly along with the left icon and right icon", () => {
      const { getByRole, queryByTestId } = render(
        <BaseButton onClick={() => {}} iconLeft={faUser} iconRight={faUser}>
          Login
        </BaseButton>
      );
      const button = getByRole("button");
      expect(queryByTestId(/icon-left/i)).not.toBeNull();
      expect(queryByTestId(/icon-right/i)).not.toBeNull();
      expect(button.innerHTML).toContain("Login");
    });
});
