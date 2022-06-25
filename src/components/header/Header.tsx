import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { HeaderProps } from "./types";
import * as Styled from "./Header.styled";

const Header: React.FunctionComponent<HeaderProps> = ({
  goBack = false,
  title,
}) => {
  const navigation = useNavigation();

  return (
    <Styled.Header>
      <Styled.HeaderTitle>{title}</Styled.HeaderTitle>
      {goBack && (
        <Styled.GoBack onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Styled.GoBack>
      )}
    </Styled.Header>
  );
};

export default Header;
