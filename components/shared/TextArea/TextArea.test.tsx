import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TextArea from "./TextArea";

describe("Test error element", () => {
  test("Error element renders when error prop is supplied", () => {
    const { queryByTestId } = render(
      <TextArea
        name="about"
        placeholder={"About"}
        error="Required"
        value=""
        onChange={e => {}}
      />
    );

    expect(queryByTestId(/error/i).innerHTML).toBe("Required");
  });

  test("Error element doesn't render when error prop is not supplied", () => {
    const { queryByTestId } = render(
      <TextArea
        name="about"
        placeholder={"About"}
        value=""
        onChange={e => {}}
      />
    );
    expect(queryByTestId(/error/i)).toBeNull();
  });
});
