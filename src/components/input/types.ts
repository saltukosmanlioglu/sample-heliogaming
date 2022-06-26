import { TextInputProps } from "react-native";

export interface InputProps {
  onChangeText: TextInputProps["onChangeText"];
  placeholder: TextInputProps["placeholder"];
  style?: TextInputProps["style"];
  value: TextInputProps["value"];
}
