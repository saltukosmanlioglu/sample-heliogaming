import { SetStateAction } from "react";

export interface PeopleProps {
  address: string;
  company: string;
  fullName: string;
  phoneNumber: string;
}

export interface EditProfileProps {
  storage: Array<PeopleProps>;
}

export interface ContactsProps {
  storage: Array<PeopleProps>;
}

export interface AddNumberProps {
  setActiveTab: React.Dispatch<SetStateAction<number>>;
  storage: Array<PeopleProps>;
}
