import React, { useState } from "react";
import { Alert, Platform, View } from "react-native";

import {
  alertPolyfill,
  asyncStorageSave,
  confirmationAlert,
} from "app/functions";
import Input from "components/input";
import MainButton from "components/main-button";

import { AddNumberProps, PeopleProps } from "./types";
import { TabEnum } from "../enum";

const AddNumber: React.FunctionComponent<AddNumberProps> = ({
  setActiveTab,
  storage,
}) => {
  const [formData, setFormData] = useState<PeopleProps>({
    address: "",
    company: "",
    fullName: "",
    phoneNumber: "",
  });

  const handleFieldChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCreate = () => {
    if (
      formData.address === "" ||
      formData.company === "" ||
      formData.fullName === "" ||
      formData.phoneNumber === ""
    ) {
      Platform.OS === "web"
        ? alertPolyfill({
            title: "Error",
            description: "You have to enter all fields",
            options: [],
          })
        : Alert.alert("Error", "You have to enter all fields");
    } else {
      if (Platform.OS === "web") {
        alertPolyfill({
          title: "Add Contact",
          description: `Create a record named ${formData.fullName} ?`,
          options: [
            {
              onPress: () => {
                localStorage.setItem(
                  "contacts",
                  JSON.stringify([...storage, formData])
                );
                window.location.reload();
              },
              style: "destructive",
              text: "Yes",
            },
          ],
        });
      } else {
        confirmationAlert({
          title: "Add Contact",
          text: `Create a record named ${formData.fullName} ?`,
          yes: () => {
            asyncStorageSave({
              key: "contacts",
              value: [...storage, formData],
            });
            setActiveTab(TabEnum.Contacts);
          },
        });
      }
    }
  };

  return (
    <View>
      <Input
        onChangeText={(e) => handleFieldChange("fullName", e)}
        placeholder="Full name"
        value={formData.fullName}
      />
      <Input
        keyboardType="phone-pad"
        onChangeText={(e) => handleFieldChange("phoneNumber", e)}
        placeholder="Phone number"
        value={formData.phoneNumber}
      />
      <Input
        onChangeText={(e) => handleFieldChange("address", e)}
        placeholder="Address"
        value={formData.address}
      />
      <Input
        onChangeText={(e) => handleFieldChange("company", e)}
        placeholder="Company"
        value={formData.company}
      />
      <MainButton color="black" onPress={handleCreate} text="SAVE" />
    </View>
  );
};

export default AddNumber;
