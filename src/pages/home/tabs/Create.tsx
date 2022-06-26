import React, { useState } from "react";
import { View, Text } from "react-native";

import { asyncStorageSave, confirmationAlert } from "../../../app/functions";
import Input from "../../../components/input";

import { PeopleProps } from "./types";
import * as Styled from "./Tabs.styled";

const Create: React.FunctionComponent = () => {
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
          value: [formData],
        });
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
      <Styled.CreateButton onPress={handleCreate}>
        <Text style={{ color: "#fff" }}>SAVE</Text>
      </Styled.CreateButton>
    </View>
  );
};

export default Create;
