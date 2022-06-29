import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { asyncStorageLoad } from "app/functions";
import Header from "components/header";
import Menu from "components/menu";
import { navigate } from "navigation";

import { AddNumber, Contacts } from "./tabs";

import { PeopleProps } from "./tabs/types";
import { TabEnum } from "./enum";
import * as Styled from "./Home.styled";

const Home: React.ComponentType = () => {
  const [activeTab, setActiveTab] = useState<TabEnum>(TabEnum.Contacts);
  const [storage, setStorage] = useState<Array<PeopleProps>>([]);

  const route = useRoute();

  const menuItems = [
    {
      onPress: () => setActiveTab(0),
      text: "Contacts",
    },
    {
      onPress: () => setActiveTab(1),
      text: "Add Number",
    },
  ];

  const handleRandom = () => {
    navigate("ViewProfile", {
      data: storage,
      index: Math.floor(Math.random() * storage.length),
    });
  };

  useEffect(() => {
    asyncStorageLoad({
      key: "contacts",
      getLoad: (value) => setStorage(JSON.parse(value)),
    });
  }, [activeTab, route]);

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={activeTab === TabEnum.Contacts ? "Contacts" : "Add Number"}
      />

      <Styled.Scroll>
        <Styled.MainView>
          {activeTab === TabEnum.Contacts ? (
            <Contacts storage={storage} />
          ) : (
            <AddNumber setActiveTab={setActiveTab} storage={storage} />
          )}
        </Styled.MainView>
      </Styled.Scroll>

      {activeTab === TabEnum.Contacts && storage.length > 1 && (
        <Styled.RandomButton onPress={handleRandom}>
          <Text>Random</Text>
        </Styled.RandomButton>
      )}

      <Menu activeMenu={activeTab} menuItems={menuItems} />
    </View>
  );
};

export default Home;
