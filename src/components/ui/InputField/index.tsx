import { TextField } from "@material-ui/core";
import React, { FC } from "react";

type inputProps = {
  value: string | number;
  onChange: () => void;
  placeholder?: string | any;
  type?: string;
  text: string;
};
export const InputField: FC<inputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  text,
}) => {
  const fieldType = type ? type : "text";

  return (
    <TextField
      type={fieldType}
      label={text}
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
