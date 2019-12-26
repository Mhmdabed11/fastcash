import * as React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUpForm from "./SignupForm";

describe("Test sign up form", () => {
  test("Form Submits correctly", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, container, getByText } = render(
      <SignUpForm onSubmit={onSubmit} submitting={false} />
    );

    fireEvent.change(getByPlaceholderText(/First Name/i), {
      target: { value: "Mohammad" }
    });
    fireEvent.change(getByPlaceholderText(/Last Name/i), {
      target: { value: "Abed" }
    });
    fireEvent.change(getByPlaceholderText(/Email/i), {
      target: { value: "mohammad_aabed@hotmail.com" }
    });
    fireEvent.change(getByPlaceholderText(/Password/), {
      target: { value: "admin" }
    });
    fireEvent.change(getByPlaceholderText(/Confirm password/), {
      target: { value: "admin" }
    });
    const country = container.querySelector('select[name="country"]');
    fireEvent.change(country, {
      target: {
        value: "Lebanon"
      }
    });

    fireEvent.click(getByText(/Register/i));
    expect(onSubmit).toBeCalledTimes(1);
  }),
    test("Form doesn't submit if First Name is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail.com" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Last Name is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail.com" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Email is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Password is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail.com" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Confirm Password is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail.com" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Country is not provided", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail.com" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: ""
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Email is provided but not valid", () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, container, getByText } = render(
        <SignUpForm onSubmit={onSubmit} submitting={false} />
      );

      fireEvent.change(getByPlaceholderText(/First Name/i), {
        target: { value: "Mohammad" }
      });
      fireEvent.change(getByPlaceholderText(/Last Name/i), {
        target: { value: "Abed" }
      });
      fireEvent.change(getByPlaceholderText(/Email/i), {
        target: { value: "mohammad_aabed@hotmail" }
      });
      fireEvent.change(getByPlaceholderText(/Password/), {
        target: { value: "admin" }
      });
      fireEvent.change(getByPlaceholderText(/Confirm password/), {
        target: { value: "admin" }
      });
      const country = container.querySelector('select[name="country"]');
      fireEvent.change(country, {
        target: {
          value: "Lebanon"
        }
      });

      fireEvent.click(getByText(/Register/i));
      expect(onSubmit).toBeCalledTimes(0);
    });
});
