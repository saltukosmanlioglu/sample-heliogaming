import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 1 };
  shadow-opacity: 1;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;
