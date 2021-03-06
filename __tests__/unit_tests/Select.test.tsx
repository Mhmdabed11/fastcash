import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Select from "../../components/shared/Select/Select";
describe("Test BaseButton", () => {
  test("Error element renders when prop is supplied", () => {
    const { queryByTestId } = render(
      <Select
        name="country"
        options={[
          {
            label: "Lebanon",
            value: "Lebanon"
          },
          {
            label: "Canada",
            value: "Canada"
          }
        ]}
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
          options={[
            {
              label: "Lebanon",
              value: "Lebanon"
            },
            {
              label: "Canada",
              value: "Canada"
            }
          ]}
          value=""
          onChange={() => {}}
          placeholder="Country"
        />
      );
      expect(queryByTestId(/error/i)).toBeNull();
    });
});
