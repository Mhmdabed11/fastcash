import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BaseAnchor from "../../components/shared/BaseAnchor/BaseAnchor";
import { faUser } from "@fortawesome/free-solid-svg-icons";

describe("Test BaseAnchor", () => {
  test("Anchor text renders correctly", () => {
    const { getByText } = render(<BaseAnchor to="/">Login</BaseAnchor>);
    const anchor = getByText("Login");
    expect(anchor.innerHTML).toBe("Login");
  }),
    test("Button text renders correctly along with the left icon and right icon", () => {
      const { queryByTestId, getByText } = render(
        <BaseAnchor to="/" iconLeft={faUser} iconRight={faUser}>
          Login
        </BaseAnchor>
      );
      const anchor = getByText("Login");
      expect(queryByTestId(/icon-left/i)).not.toBeNull();
      expect(queryByTestId(/icon-right/i)).not.toBeNull();
      expect(anchor.innerHTML).toContain("Login");
    });
});
