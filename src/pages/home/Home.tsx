import React, { useState } from "react";
import { View } from "react-native";

import Header from "../../components/header";
import Menu from "../../components/menu";

import { Contacts, Create, EditProfile } from "./tabs";

import * as Styled from "./Home.styled";

const Home: React.ComponentType = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const menuItems = [
    {
      onPress: () => setActiveTab(0),
      text: "Profile",
    },
    {
      onPress: () => setActiveTab(1),
      text: "Contacts",
    },
    {
      onPress: () => setActiveTab(2),
      text: "Add Number",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={
          activeTab === 0
            ? "My Profile"
            : activeTab === 1
            ? "Contacts"
            : "Add Number"
        }
      />

      <Styled.Scroll>
        <Styled.MainView>
          {activeTab === 0 ? (
            <EditProfile />
          ) : activeTab === 1 ? (
            <Contacts />
          ) : (
            <Create />
          )}
        </Styled.MainView>
      </Styled.Scroll>

      <Menu menuItems={menuItems} />
    </View>
  );
};

export default Home;
