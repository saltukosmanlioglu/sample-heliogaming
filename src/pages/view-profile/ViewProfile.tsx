import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  CommonActions,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { asyncStorageSave, confirmationAlert } from "app/functions";
import Header from "components/header";
import Input from "components/input";
import MainButton from "components/main-button";
import { RootStackParamList } from "navigation/types";

import { PeopleProps } from "../home/tabs";
import { ViewProfileProps } from "./types";
import * as HomeStyled from "../home/Home.styled";

const ViewProfile: React.ComponentType<ViewProfileProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, "ViewProfile">>();
  const navigation = useNavigation();

  const index = Number(route.params.index);

  const reset = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "HomePage" }],
      })
    );

  const [formData, setFormData] = useState<PeopleProps>({
    ...(route.params.data.findIndex(
      (e: PeopleProps, i: number) => i === index && e
    ) as any),
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
        const newArr = route.params.data.slice();
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
          <MainButton color="blue" onPress={handleUpdate} text="Update" />
          <MainButton color="red" onPress={handleDelete} text="Delete" />
        </HomeStyled.MainView>
      </HomeStyled.Scroll>
    </View>
  ) : null;
};

export default ViewProfile;
