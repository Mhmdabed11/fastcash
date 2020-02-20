import * as React from "react";
import BaseButton from "../BaseButton/BaseButton";
const PRIMARY_COLOR = "#2062f0";
const WHITE = "#FFFFFF";
import { ButtonProps } from "../BaseButton/BaseButton";
export default function PrimaryButton({
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
        backgroundColor: PRIMARY_COLOR,
        color: WHITE,
        fontWeight: "normal",
        ...style
      }}
    >
      {children}
    </BaseButton>
  );
}
