import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface InputProps {
  label?: string;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  placeholder: string;
  type?: string;
}

export default function Input({
  label,
  placeholder,
  iconLeft,
  iconRight,
  type = "text"
}: InputProps) {
  return (
    <div className="field">
      {label ? <label className="label">{label}</label> : null}
      <div
        className={`control ${iconLeft ? "has-icons-left" : ""} ${
          iconRight ? "has-icons-right" : ""
        } : ""`}
      >
        <input className="input" type={type} placeholder={placeholder} />
        {iconLeft ? (
          <span className="icon is-large is-left">
            <FontAwesomeIcon icon={iconLeft} />
          </span>
        ) : null}
        {iconRight ? (
          <span className="icon is-medium is-right">
            <FontAwesomeIcon icon={iconRight} />
          </span>
        ) : null}
      </div>
    </div>
  );
}
