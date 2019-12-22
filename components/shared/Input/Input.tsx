import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Input.scss";
type InputProps = {
  label?: string;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  placeholder: string;
  type?: string;
  name: string;
  error?: string;
  value: number | string;
  onChange: (e) => void;
  required: boolean;
};

export default function Input({
  label,
  placeholder,
  iconLeft,
  iconRight,
  type = "text",
  name,
  error,
  value,
  onChange,
  required = false
}: InputProps) {
  const renderLabel = () =>
    label ? (
      <label htmlFor={name} className="label">
        {label}
      </label>
    ) : null;

  const renderIconLeft = () =>
    iconLeft ? (
      <span className="icon is-large is-left">
        <FontAwesomeIcon icon={iconLeft} />
      </span>
    ) : null;

  const renderIconRight = () =>
    iconRight ? (
      <span className="icon is-medium is-right">
        <FontAwesomeIcon icon={iconRight} />
      </span>
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
      <div
        className={`control ${iconLeft ? "has-icons-left" : ""} ${
          iconRight ? "has-icons-right" : ""
        } : ""`}
      >
        <input
          name={name}
          className={`input ${error ? "is-danger" : ""}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {renderError()}
        {renderIconLeft()}
        {renderIconRight()}
      </div>
    </div>
  );
}
