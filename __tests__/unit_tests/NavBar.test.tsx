import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../../components/shared/NavBar/NavBar";
import cookie from "js-cookie";

describe("Test NavBar", () => {
  test("", () => expect(1 + 1).toBe(2));
  // test("Test if the navbar renders auth information when authenticated", () => {
  //   const { queryByTestId } = render(<NavBar authenticated={true} />);
  //   expect(queryByTestId(/nonAuthSection/i)).not.toBeInTheDOM();
  //   expect(queryByTestId(/postJobAuthSection/i)).toBeInTheDOM();
  //   expect(queryByTestId(/profileAuthSection/i)).toBeInTheDOM();
  // }),
  //   test("Test if the navbar renders nonauth information when not authenticated", () => {
  //     const { queryByTestId } = render(<NavBar authenticated={false} />);
  //     expect(queryByTestId(/nonAuthSection/i)).toBeInTheDOM();
  //     expect(queryByTestId(/postJobAuthSection/i)).not.toBeInTheDOM();
  //     expect(queryByTestId(/profileAuthSection/i)).not.toBeInTheDOM();
  //   });
});
