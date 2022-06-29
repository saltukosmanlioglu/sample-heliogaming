import React from "react";
import { Text } from "react-native";

import { MainButtonProps } from "./types";
import * as Styled from "./MainButton.styled";

const MainButton: React.FunctionComponent<MainButtonProps> = ({
  color,
  onPress,
  text,
}) => {
  return (
    <Styled.MainButton color={color} onPress={onPress}>
      <Text style={{ color: "#fff" }}>{text}</Text>
    </Styled.MainButton>
  );
};

export default MainButton;
