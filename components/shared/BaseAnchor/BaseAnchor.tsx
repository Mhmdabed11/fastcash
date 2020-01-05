import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
enum AnchorSizes {
  small,
  medium,
  large
}
export type AnchorProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  rounded?: boolean;
  style?: object;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: IconProp;
  iconRight?: IconProp;
  to: string;
};

export default function BaseAnchor({
  children,
  size,
  fullWidth,
  style,
  rounded,
  loading,
  disabled = false,
  iconLeft,
  iconRight,
  to
}: AnchorProps) {
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
    <Link href={to}>
      <a className={className} style={style}>
        {renderIconLeft()}
        {renderChildren()}
        {renderIconRight()}
      </a>
    </Link>
  );
}
