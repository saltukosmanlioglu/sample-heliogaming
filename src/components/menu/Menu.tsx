import React from "react";
import { Text } from "react-native";

import { MenuProps } from "./types";
import * as Styled from "./Menu.styled";

const Menu: React.FunctionComponent<MenuProps> = ({
  activeMenu,
  menuItems,
}) => {
  return (
    <Styled.Menu>
      <Styled.Row>
        {menuItems.map((menu, index) => (
          <Styled.MenuButton
            key={index}
            activeMenu={activeMenu}
            index={index}
            onPress={menu.onPress}
          >
            <Text>{menu.text}</Text>
          </Styled.MenuButton>
        ))}
      </Styled.Row>
    </Styled.Menu>
  );
};

export default Menu;
