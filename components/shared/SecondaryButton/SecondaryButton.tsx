import * as React from "react";
import BaseButton from "../BaseButton/BaseButton";
const PRIMARY_COLOR = "#2062f0";
const WHITE = "#FFFFFF";
import { ButtonProps } from "../BaseButton/BaseButton";
export default function SecondaryButton({
  children,
  onClick,
  style,
  ...rest
}: ButtonProps) {
  return (
    <BaseButton
      onClick={onClick}
      {...rest}
      style={{
        backgroundColor: WHITE,
        color: PRIMARY_COLOR,
        fontWeight: "normal",
        borderColor: PRIMARY_COLOR,
        ...style
      }}
    >
      {children}
    </BaseButton>
  );
}
