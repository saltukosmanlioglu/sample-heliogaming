import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { CommonActions, useRoute } from "@react-navigation/native";

import { asyncStorageSave, confirmationAlert } from "../../app/functions";
import Header from "../../components/header";
import Input from "../../components/input";

import { ViewProfileProps } from "./types";
import * as Styled from "./ViewProfile.styled";
import * as HomeStyled from "../home/Home.styled";
import { PeopleProps } from "../home/tabs";

const ViewProfile: React.ComponentType<ViewProfileProps> = ({
  navigation,
}: any) => {
  const route = useRoute<any>();

  const index = route.params.index;

  const reset = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "HomePage" }],
      })
    );

  const [formData, setFormData] = useState<PeopleProps>({
    ...route.params.data.findIndex(
      (e: PeopleProps, i: number) => i === index && e
    ),
  });

  const handleFieldChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleDelete = () => {
    confirmationAlert({
      text: "Are you sure that you want to delete ?",
      title: "Delete Contact",
      yes: () => {
        const newData = [
          ...route.params.data.slice(0, index),
          ...route.params.data.slice(index + 1),
        ];

        asyncStorageSave({ key: "contacts", value: newData });

        reset();
      },
    });
  };

  const handleUpdate = () => {
    confirmationAlert({
      text: "Your informations will update ?",
      title: "Update Contact",
      yes: () => {
        const newArr = route.params.data;
        newArr[index] = formData;

        asyncStorageSave({ key: "contacts", value: newArr });

        reset();
      },
    });
  };

  useEffect(() => {
    route.params.data.findIndex(
      (e: PeopleProps, i: number) => i === index && setFormData(e)
    );
  }, [route]);

  return route.params.data ? (
    <View style={{ flex: 1 }}>
      <Header title={formData.fullName} goBack />
      <HomeStyled.Scroll>
        <HomeStyled.MainView>
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
          <Styled.UpdateButton onPress={handleUpdate}>
            <Text style={{ color: "#fff" }}>Update</Text>
          </Styled.UpdateButton>
          <Styled.DeleteButton onPress={handleDelete}>
            <Text style={{ color: "#fff" }}>Delete</Text>
          </Styled.DeleteButton>
        </HomeStyled.MainView>
      </HomeStyled.Scroll>
    </View>
  ) : null;
};

export default ViewProfile;
