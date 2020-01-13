import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from "../components/shared/SearchInput/SearchInput";

describe("Test search input element", () => {
  test("Submit calls onSubmit funciton ", () => {
    const onSubmit = jest.fn();
    const { getByRole } = render(<SearchInput onSubmit={onSubmit} />);
    const submitButton = getByRole("button");
    fireEvent.click(submitButton);
    expect(onSubmit).toBeCalledTimes(1);
  });
});
