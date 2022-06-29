import styled from "styled-components/native";

import { MainButtonProps } from "./types";

export const MainButton = styled.TouchableOpacity<
  Pick<MainButtonProps, "color">
>`
  background-color: ${({ color }) => color};
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 20px;
`;
