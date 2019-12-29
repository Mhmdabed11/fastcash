import * as React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginForm from "./LoginForm";

describe("Test Login Form", () => {
  test("Form submits correctly", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <LoginForm onSubmit={onSubmit} submitting={false} />
    );
    fireEvent.change(getByPlaceholderText(/Email/i), {
      target: {
        value: "email@meial.com"
      }
    });
    fireEvent.change(getByPlaceholderText(/Password/i), {
      target: {
        value: "admin"
      }
    });
    fireEvent.click(getByText(/Login/i));
    expect(onSubmit).toBeCalledTimes(1);
  }),
    test("Form doesn't submit if email is empty", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <LoginForm onSubmit={onSubmit} submitting={false} />
      );
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: {
          value: ""
        }
      });
      fireEvent.change(getByPlaceholderText(/Password/i), {
        target: {
          value: "admin"
        }
      });
      fireEvent.click(getByText(/Login/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if password is not vaild", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <LoginForm onSubmit={onSubmit} submitting={false} />
      );
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: {
          value: "email@email.com"
        }
      });
      fireEvent.change(getByPlaceholderText(/Password/i), {
        target: {
          value: ""
        }
      });
      fireEvent.click(getByText(/Login/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if email is not vaild", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <LoginForm onSubmit={onSubmit} submitting={false} />
      );
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: {
          value: "mohammad@mohammad"
        }
      });
      fireEvent.change(getByPlaceholderText(/Password/i), {
        target: {
          value: "admin"
        }
      });
      fireEvent.click(getByText(/Login/i));
      expect(onSubmit).toBeCalledTimes(0);
    });
});
