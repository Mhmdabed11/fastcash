import * as React from "react";
import "./Loginform.scss";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { validationSchema } from "./validation";
import Input from "../shared/Input/Input";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";

type FormProps = {
  onSubmit: (values: object) => void;
  submitting: boolean;
};

// initialValues
const initialValues = {
  email: {
    value: ""
  },
  password: {
    value: ""
  }
};

export default function LoginForm() {
  const { values, handleFormSubmit, onChange } = useFormValidation(
    initialValues,
    validationSchema
  );

  return (
    <form data-testid="login-form">
      <div className="columns is-multiline">
        <div className="column is-full">
          <Input
            placeholder="Email"
            name="email"
            value={values.email.value}
            onChange={onChange}
            iconLeft={faEnvelope}
          />
        </div>
        <div className="column is-full">
          <Input
            name="password"
            placeholder="Password"
            value={values.password.value}
            onChange={onChange}
            iconLeft={faLock}
            type="password"
          />
        </div>

        <div className="column is-full">
          <PrimaryButton type="submit" fullWidth onClick={() => {}}>
            Login
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
