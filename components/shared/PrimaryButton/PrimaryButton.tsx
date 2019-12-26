import * as React from "react";
import BaseButton from "../BaseButton/BaseButton";
const PRIMARY_COLOR = "#2062f0";
const WHITE = "#FFFFFF";
export default function PrimaryButton({ children, ...rest }) {
  return (
    <BaseButton
      {...rest}
      style={{
        backgroundColor: PRIMARY_COLOR,
        color: WHITE,
        fontWeight: "normal",
        height: "50px"
      }}
    >
      {children}
    </BaseButton>
  );
}
