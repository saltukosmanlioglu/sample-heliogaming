import { SetStateAction } from "react";

export interface PeopleProps {
  address: string;
  company: string;
  fullName: string;
  phoneNumber: string;
}

export interface ContactsProps {
  storage: Array<PeopleProps>;
}

export interface AddNumberProps {
  setActiveTab: React.Dispatch<SetStateAction<number>>;
  setStorage?: React.Dispatch<SetStateAction<Array<PeopleProps>>>;
  storage: Array<PeopleProps>;
}
