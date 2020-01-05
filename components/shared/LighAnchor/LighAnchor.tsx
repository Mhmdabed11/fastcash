import * as React from "react";
import BaseAnchor from "../BaseAnchor/BaseAnchor";
const LIGHT_COLOR = "whitesmoke";
const BLACK = "#363636";
export default function LightAnchor({ children, to, ...rest }) {
  return (
    <BaseAnchor
      to={to}
      {...rest}
      style={{
        backgroundColor: LIGHT_COLOR,
        color: BLACK,
        fontWeight: "normal"
      }}
    >
      {children}
    </BaseAnchor>
  );
}
