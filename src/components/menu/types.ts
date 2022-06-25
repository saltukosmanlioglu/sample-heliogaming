export interface MenuProps {
  menuItems: Array<{
    text: string;
    onPress: () => void;
  }>;
}
