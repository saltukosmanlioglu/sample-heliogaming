import React, { useState } from "react";
import { View } from "react-native";

import { asyncStorageSave, confirmationAlert } from "app/functions";
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
