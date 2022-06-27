import React, { SetStateAction } from "react";
import { PeopleProps } from "../home/tabs";

export interface ViewProfileProps {
  storage: Array<PeopleProps>;
  setStorage: React.Dispatch<SetStateAction<Array<PeopleProps>>>;
}
