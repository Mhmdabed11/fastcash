import React from "react";
import Input from "../shared/Input/Input";
import {
  faUser,
  faEnvelope,
  faGlobe,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { validationSchema } from "./validation";

type formProps = {
  onSubmit: (values: object) => void;
  submitting: boolean;
};

//initialvalues
const initialValues = {
  firstName: {
    value: ""
  },
  lastName: {
    value: ""
  },
  email: {
    value: ""
  },
  country: {
    value: ""
  },
  password: {
    value: ""
  },
  confirmPassword: {
    value: ""
  }
};
export default function SignupForm({ onSubmit, submitting }: formProps) {
  const { values, onChange, handleFormSubmit } = useFormValidation(
    initialValues,
    validationSchema
  );

  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(handleSignup);
  };

  const handleSignup = () => {
    const formValues: object = {
      firstName: values.firstName.value,
      lastName: values.lastName.value,
      email: values.email.value,
      country: values.country.value,
      password: values.password.value,
      confirmPassword: values.confirmPassword.value
    };
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="columns is-multiline">
        <div className="column is-half-fullhd">
          <Input
            name="firstName"
            iconLeft={faUser}
            placeholder={"First Name"}
            value={values.firstName.value}
            onChange={onChange}
            error={
              values.firstName.errorLabel ? values.firstName.errorLabel : null
            }
            required={false}
          />
        </div>

        <div className="column is-half-fullhd">
          <Input
            name="lastName"
            iconLeft={faUser}
            placeholder={"Last Name"}
            value={values.lastName.value}
            onChange={onChange}
            error={
              values.lastName.errorLabel ? values.lastName.errorLabel : null
            }
            required={false}
          />
        </div>
        <div className="column is-full">
          <Input
            name="email"
            iconLeft={faEnvelope}
            placeholder={"Email"}
            type="email"
            value={values.email.value}
            onChange={onChange}
            error={values.email.errorLabel ? values.email.errorLabel : null}
            required={false}
          />
        </div>
        <div className="column is-full">
          <Input
            name="country"
            iconLeft={faGlobe}
            placeholder={"Country"}
            value={values.country.value}
            onChange={onChange}
            error={values.country.errorLabel ? values.country.errorLabel : null}
            required={false}
          />
        </div>
        <div className="column is-full">
          <Input
            name="password"
            iconLeft={faLock}
            placeholder={"Password"}
            type="password"
            value={values.password.value}
            onChange={onChange}
            error={
              values.password.errorLabel ? values.password.errorLabel : null
            }
            required={false}
          />
        </div>
        <div className="column is-full">
          <Input
            name="confirmPassword"
            iconLeft={faLock}
            placeholder={"Confirm password"}
            type="password"
            value={values.confirmPassword.value}
            onChange={onChange}
            error={
              values.confirmPassword.errorLabel
                ? values.confirmPassword.errorLabel
                : null
            }
            required={false}
          />
        </div>
      </div>
      <PrimaryButton type="submit" fullWidth loading={submitting}>
        Register
      </PrimaryButton>
    </form>
  );
}
