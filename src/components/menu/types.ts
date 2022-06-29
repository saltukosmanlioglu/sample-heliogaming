export type ItemProps = {
  onPress: () => void;
  text: string;
};

export interface MenuProps {
  activeMenu: any;
  menuItems: Array<ItemProps>;
}
