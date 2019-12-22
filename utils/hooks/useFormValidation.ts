import React from "react";
import { validateInput } from "../helpers/validateInput";

type formValidationArgs = {
  values: any;
  setValues: (val: any) => void;
  onChange: (e) => void;
  handleFormSubmit: (func: Function) => void;
};

export const useFormValidation = (
  initialValue: object,
  validationSchema: object
): formValidationArgs => {
  const [values, setValues] = React.useState(initialValue);
  const onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setValues(values => ({
      ...values,
      [name]: {
        value: value,
        errorLabel: validateInput(name, value, validationSchema)
      }
    }));
  };

  const handleFormSubmit = cb => {
    let newState = { ...values };
    let valid = true;

    for (let entry in newState) {
      const validationResult = validateInput(
        entry,
        newState[entry].value,
        validationSchema
      );
      newState = {
        ...newState,
        [entry]: {
          ...newState[entry],
          errorLabel: validationResult
        }
      };
    }

    valid = !Object.keys(newState).some(
      entry => newState[entry].errorLabel !== null
    );
    setValues(newState);
    if (valid) {
      if (cb) cb();
    } else {
      return;
    }
  };
  return {
    values,
    setValues,
    onChange,
    handleFormSubmit
  };
};
