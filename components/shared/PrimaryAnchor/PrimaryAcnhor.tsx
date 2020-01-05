import * as React from "react";
import BaseAnchor, { AnchorProps } from "../BaseAnchor/BaseAnchor";
const PRIMARY_COLOR = "#2062f0";
const WHITE = "#FFFFFF";
export default function PrimaryAnchor({
  children,
  to,
  style,
  ...rest
}: AnchorProps) {
  return (
    <BaseAnchor
      to={to}
      {...rest}
      style={{
        backgroundColor: PRIMARY_COLOR,
        color: WHITE,
        fontWeight: "normal",
        ...style
      }}
    >
      {children}
    </BaseAnchor>
  );
}
