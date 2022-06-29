import { PeopleProps } from "pages/home/tabs";

export type RootStackParamList = {
  HomePage: undefined;
  ViewProfile: {
    index: number | string;
    data: Array<PeopleProps>;
  };
};
