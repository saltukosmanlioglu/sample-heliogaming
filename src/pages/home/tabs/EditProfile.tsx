import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import { confirmationAlert } from "../../../app/functions";
import Input from "../../../components/input";

import * as Styled from "./Tabs.styled";

const EditProfile: React.FunctionComponent = () => {
  const route: any = useRoute();

  const handleDelete = () => {
    confirmationAlert({
      text: "Are you sure that you want to delete ?",
      title: "Delete Contact",
      yes: () => {},
    });
  };

  const handleUpdate = () => {
    confirmationAlert({
      text: "Your informations will update ?",
      title: "Update Contact",
      yes: () => {},
    });
  };

  return (
    <View>
      <Input placeholder="Full name" value={route?.data?.fullName} />
      <Input
        keyboardType="phone-pad"
        placeholder="Phone number"
        value={route?.data?.phoneNumber}
      />
      <Input placeholder="Address" value={route?.data?.address} />
      <Input placeholder="Company" value={route?.data?.company} />
      <Styled.UpdateButton onPress={handleUpdate}>
        <Text style={{ color: "#fff" }}>Update</Text>
      </Styled.UpdateButton>
      <Styled.DeleteButton onPress={handleDelete}>
        <Text style={{ color: "#fff" }}>Delete</Text>
      </Styled.DeleteButton>
    </View>
  );
};

export default EditProfile;
