import * as React from "react";
import "./Select.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SelectProps = {
  options: (string | number)[];
  name: string;
  multiple?: boolean;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  iconLeft?: IconProp;
  label?: string;
  error?: string;
  value: string | number;
  onChange: (e) => void;
  required?: boolean;
  fullWidth?: boolean;
  placeholder: string;
};

export default function Select({
  options,
  multiple = false,
  rounded = false,
  size,
  loading,
  iconLeft,
  label,
  name,
  error,
  value,
  onChange,
  required = false,
  fullWidth = true,
  placeholder
}: SelectProps) {
  const multipleClassName = multiple ? "is-multiple" : "";
  const roundedClassName = rounded ? "is-rounded" : "";
  const sizeClassName = size ? `is-${size}` : "";
  const loadingClassName = loading ? "is-loading" : "";
  const errorClassName = error ? "is-danger" : "";
  const fullWidthClassName = fullWidth ? "is-fullwidth" : "";

  //combine classNames
  const className = `${multipleClassName} ${roundedClassName} ${sizeClassName} ${loadingClassName} ${errorClassName} ${fullWidthClassName}`;

  //render label
  const renderLabel = () => {
    return label ? (
      <label htmlFor={name} className="label">
        {label}
      </label>
    ) : null;
  };

  // render options
  const renderOptions = (): React.ReactFragment => {
    return (
      <>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        ;
      </>
    );
  };

  // render left icon
  const renderLeftIcon = () => {
    return iconLeft ? (
      <span className="icon is-medium is-left">
        <FontAwesomeIcon icon={iconLeft} />
      </span>
    ) : null;
  };

  // render error
  const renderError = () =>
    error ? (
      <p data-testid="error" role="alert" className="input-error">
        {error}
      </p>
    ) : null;

  return (
    <div className="field">
      {renderLabel()}
      <div className={`control ${iconLeft ? "has-icons-left" : ""} `}>
        <div className={`select ${className}`}>
          <select
            name={name}
            value={value}
            onChange={onChange}
            required={required}
          >
            {renderOptions()}
          </select>
        </div>
        {renderError()}
        {renderLeftIcon()}
      </div>
    </div>
  );
}
