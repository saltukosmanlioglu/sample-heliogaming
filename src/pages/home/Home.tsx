import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { asyncStorageLoad } from "../../app/functions";
import Header from "../../components/header";
import Menu from "../../components/menu";

import { AddNumber, Contacts, EditProfile } from "./tabs";

import * as Styled from "./Home.styled";
import { PeopleProps } from "./tabs/types";

const Home: React.ComponentType = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [storage, setStorage] = useState<Array<PeopleProps>>([]);

  useEffect(() => {
    asyncStorageLoad({
      key: "contacts",
      getLoad: (value) => setStorage(JSON.parse(value)),
    });
  }, [activeTab]);

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
            <Contacts storage={storage} />
          ) : (
            <AddNumber setActiveTab={setActiveTab} storage={storage} />
          )}
        </Styled.MainView>
      </Styled.Scroll>

      {activeTab === 1 && (
        <Styled.RandomButton>
          <Text>Random</Text>
        </Styled.RandomButton>
      )}

      <Menu menuItems={menuItems} />
    </View>
  );
};

export default Home;
