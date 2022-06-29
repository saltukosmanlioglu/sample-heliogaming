export type ItemProps = {
  onPress: () => void;
  text: string;
};

export interface MenuProps {
  activeMenu: number;
  menuItems: Array<ItemProps>;
}
