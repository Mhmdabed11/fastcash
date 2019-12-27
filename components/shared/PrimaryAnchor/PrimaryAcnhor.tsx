import * as React from "react";
import BaseAnchor from "../BaseAnchor/BaseAnchor";
const PRIMARY_COLOR = "#2062f0";
const WHITE = "#FFFFFF";
export default function PrimaryAnchor({ children, to, ...rest }) {
  return (
    <BaseAnchor
      to={to}
      {...rest}
      style={{
        backgroundColor: PRIMARY_COLOR,
        color: WHITE,
        fontWeight: "normal",
        height: "50px"
      }}
    >
      {children}
    </BaseAnchor>
  );
}
