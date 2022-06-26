import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import Header from "../../components/header";

const ViewProfile: React.ComponentType = () => {
  const route = useRoute<any>();

  return (
    <View style={{ flex: 1 }}>
      <Header title={route.params.name} goBack />
    </View>
  );
};

export default ViewProfile;
