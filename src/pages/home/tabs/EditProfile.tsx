import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

import Input from "../../../components/input";
import * as Styled from "./Tabs.styled";

const EditProfile: React.FunctionComponent = () => {
  const route: any = useRoute();

  const handleDeleteClick = () => {};

  const handleUpdateClick = () => {};

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
      <Styled.UpdateButton onPress={handleUpdateClick}>
        <Text style={{ color: "#fff" }}>Update</Text>
      </Styled.UpdateButton>
      <Styled.DeleteButton onPress={handleDeleteClick}>
        <Text style={{ color: "#fff" }}>Delete</Text>
      </Styled.DeleteButton>
    </View>
  );
};

export default EditProfile;
