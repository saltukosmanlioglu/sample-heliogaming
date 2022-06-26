import { Alert } from "react-native";

import { ConfirmationAlertProps } from "./types";

export const confirmationAlert = ({ title, text, yes, no }: ConfirmationAlertProps) => {
  Alert.alert(title, text, [
    {
      onPress: () => no?.(),
      style: "cancel",
      text: "Hayır",
    },
    {
      onPress: () => yes?.(),
      style: "destructive",
      text: "Evet",
    },
  ]);
};
