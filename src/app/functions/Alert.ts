import { Alert, AlertButton } from "react-native";

import { AlertPolyFillProps, ConfirmationAlertProps } from "./types";

export const alertPolyfill = ({
  title,
  description,
  options,
}: AlertPolyFillProps) => {
  const result = window.confirm(`${title} ${"\n"}${description}`);

  if (result) {
    const confirmOption = options.find(
      (style: AlertButton["style"]) => style !== "destructive"
    );
    confirmOption.onPress?.();
  }
};

export const confirmationAlert = ({
  title,
  text,
  yes,
  no,
}: ConfirmationAlertProps) => {
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
