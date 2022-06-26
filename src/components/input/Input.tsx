import React from "react";
import { TextInput } from "react-native";

import { InputProps } from "./types";
import * as Styled from "./Input.styled";

const Input: React.FunctionComponent<InputProps> = ({
  keyboardType,
  onChangeText,
  placeholder,
  value,
  ...style
}) => {
  return (
    <Styled.Input>
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ padding: 20, paddingLeft: 10, paddingRight: 10, ...style }}
        value={value}
      />
    </Styled.Input>
  );
};

export default Input;
