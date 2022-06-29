import styled from "styled-components/native";

export const Menu = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  height: 60px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuButton = styled.TouchableOpacity<{
  activeMenu: number;
  index: number;
}>`
  background-color: ${({ activeMenu, index }) =>
    activeMenu === index ? "#cecece" : "#fff"}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 100%;
  flex: 1;
`;
