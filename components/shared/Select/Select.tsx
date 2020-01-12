import * as React from "react";
import "./Select.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSelect from "react-select";

type SelectValue = {
  value: string | number;
  label: string | number;
};

type SelectProps = {
  options: object[];
  name: string;
  multiple?: boolean;
  rounded?: boolean;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  iconLeft?: IconProp;
  label?: string;
  error?: string;
  value: SelectValue | {};
  onChange: (e) => void;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  clearable?: boolean;
  isMulti?: boolean;
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
  placeholder,
  isMulti,
  clearable
}: SelectProps) {
  const multipleClassName = multiple ? "is-multiple" : "";
  const roundedClassName = rounded ? "is-rounded" : "";
  const sizeClassName = size ? `is-${size}` : "";
  const loadingClassName = loading ? "is-loading" : "";
  const fullWidthClassName = fullWidth ? "is-fullwidth" : "";

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: error ? "red" : "#dbdbdb"
      // You can also use state.isFocused to conditionally style based on the focus state
    })
  };

  //combine classNames
  const className = `${multipleClassName} ${roundedClassName} ${sizeClassName} ${loadingClassName}  ${fullWidthClassName}`;

  //render label
  const renderLabel = () => {
    return label ? (
      <label htmlFor={name} className="label">
        {label}
      </label>
    ) : null;
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
        <div className={` ${className}`}>
          <ReactSelect
            required={required}
            name={name}
            onChange={onChange}
            value={value}
            options={options}
            styles={customStyles}
            isMulti={isMulti}
            isClearable={clearable}
            placeholder={placeholder}
            id="react-select-unique-id"
            instanceId="react-select-unique-id"
          />
        </div>
        {renderError()}
        {renderLeftIcon()}
      </div>
    </div>
  );
}
