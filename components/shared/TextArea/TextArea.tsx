import * as React from "react";

import "./TextArea.scss";
type TextAreaProps = {
  label?: string;
  placeholder: string;
  type?: string;
  name: string;
  error?: string;
  value: number | string;
  onChange: (e) => void;
  required?: boolean;
  disabled?: boolean;
};

export default function Input({
  label,
  placeholder,
  name,
  error,
  value,
  onChange,
  disabled,
  required = false
}: TextAreaProps) {
  const renderLabel = () =>
    label ? (
      <label htmlFor={name} className="label">
        {label}
      </label>
    ) : null;

  const renderError = () =>
    error ? (
      <p data-testid="error" role="alert" className="input-error">
        {error}
      </p>
    ) : null;
  return (
    <div className="field">
      {renderLabel()}
      <div className="control">
        <textarea
          name={name}
          className={`textarea ${error ? "is-danger" : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        {renderError()}
      </div>
    </div>
  );
}
