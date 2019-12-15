import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
enum ButtonSizes {
  small,
  medium,
  large
}
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSizes;
  fullWidth?: boolean;
  rounded?: boolean;
  style?: object;
  isLoading?: boolean;
  disabled?: boolean;
  iconLeft?: IconProp;
  iconRight?: IconProp;
};

const sizeMapper = {
  small: "is-small",
  medium: "is-medium",
  large: "is-large"
};

export default function Button({
  children,
  onClick,
  size,
  fullWidth,
  style,
  rounded,
  isLoading,
  disabled = false,
  iconLeft,
  iconRight
}: ButtonProps) {
  const sizeClassName = size ? sizeMapper[size] : "";
  const fullWidthClassName = fullWidth ? "is-fullwidth" : "";
  const isLoadingClassName = isLoading ? "is-loading" : "";
  const isRoundedClassName = rounded ? "is-rounded" : "";
  const className = `button ${sizeClassName} ${fullWidthClassName} ${isLoadingClassName} ${isRoundedClassName}`;
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
    >
      {renderIconLeft()}
      {renderChildren()}
      {renderIconRight()}
    </button>
  );
}
