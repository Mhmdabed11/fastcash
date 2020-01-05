import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from "./Select";
describe("Test BaseButton", () => {
  test("Error element renders when prop is supplied", () => {
    const { queryByTestId } = render(
      <Select
        name="country"
        options={["Lebanon", "Canada"]}
        error="Required"
        value=""
        onChange={() => {}}
        placeholder="Country"
      />
    );

    expect(queryByTestId(/error/i).innerHTML).toBe("Required");
  }),
    test("Error element doesn't render when error prop is not supplied", () => {
      const { queryByTestId } = render(
        <Select
          name="country"
          options={["Lebanon", "Canada"]}
          value=""
          onChange={() => {}}
          placeholder="Country"
        />
      );
      expect(queryByTestId(/error/i)).toBeNull();
    });
});
