import { TextInputProps } from "react-native";

export interface InputProps {
  keyboardType?: TextInputProps["keyboardType"];
  maxLength?: TextInputProps["maxLength"];
  onChangeText?: TextInputProps["onChangeText"];
  placeholder: TextInputProps["placeholder"];
  style?: TextInputProps["style"];
  value: TextInputProps["value"];
}
