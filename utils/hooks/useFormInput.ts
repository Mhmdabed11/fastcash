import * as React from "react";

type returnType = {
  value: string | number;
  onChange: (e: any) => void;
};
export const useFormInput = (initialValue: string | number): returnType => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange
  };
};
