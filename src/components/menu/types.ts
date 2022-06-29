export type ItemProps = {
  onPress: () => void;
  text: string;
};

export interface MenuProps {
  menuItems: Array<ItemProps>;
}
