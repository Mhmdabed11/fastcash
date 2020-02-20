import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
enum ButtonSizes {
  small,
  medium,
  large
}
export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e) => void;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  style?: object;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  size,
  fullWidth,
  style,
  rounded,
  loading,
  disabled = false,
  iconLeft,
  iconRight,
  type
}: ButtonProps) {
  const sizeClassName = size ? `is-${size}` : "";
  const fullWidthClassName = fullWidth ? "is-fullwidth" : "";
  const loadingClassName = loading ? "is-loading" : "";
  const isRoundedClassName = rounded ? "is-rounded" : "";
  const className = `button ${sizeClassName} ${fullWidthClassName} ${loadingClassName} ${isRoundedClassName}`;
  const renderIconLeft = () =>
    iconLeft ? (
      <span data-testid="icon-left" className="icon is-large is-left">
        <FontAwesomeIcon icon={iconLeft} />
      </span>
    ) : null;

  const renderIconRight = () =>
    iconRight ? (
      <span data-testid="icon-right" className="icon is-medium is-right">
        <FontAwesomeIcon icon={iconRight} />
      </span>
    ) : null;

  const renderChildren = () =>
    iconLeft !== undefined || iconRight !== undefined ? (
      <span>{children}</span>
    ) : (
      children
    );

  return (
    <button
      className={className}
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {renderIconLeft()}
      {renderChildren()}
      {renderIconRight()}
    </button>
  );
}
