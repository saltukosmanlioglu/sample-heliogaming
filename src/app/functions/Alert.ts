import { Alert } from "react-native";

import { ConfirmationAlertProps } from "./types";

export const confirmationAlert = ({ title, text, yes, no }: ConfirmationAlertProps) => {
  Alert.alert(title, text, [
    {
      onPress: () => no?.(),
      style: "cancel",
      text: "No",
    },
    {
      onPress: () => yes?.(),
      style: "destructive",
      text: "Yes",
    },
  ]);
};
