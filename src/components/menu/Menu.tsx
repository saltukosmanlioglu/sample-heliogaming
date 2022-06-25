import React from "react";
import { Text } from "react-native";

import { navigate } from "../../navigation";
import { MenuProps } from "./types";
import * as Styled from "./Menu.styled";

const Menu: React.FunctionComponent<MenuProps> = ({ menuItems }) => {
  return (
    <Styled.Menu>
      <Styled.Row>
        {menuItems.map((menu, index) => (
          <Styled.MenuButton key={index} onPress={() => menu.onPress()}>
            <Text>{menu.text}</Text>
          </Styled.MenuButton>
        ))}
      </Styled.Row>
    </Styled.Menu>
  );
};

export default Menu;
