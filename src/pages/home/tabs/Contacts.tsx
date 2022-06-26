import React, { useState } from "react";
import { Text, View } from "react-native";

import Input from "../../../components/input";
import { navigate } from "../../../navigation";
import * as Styled from "./Tabs.styled";

const Contacts: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>();

  const contacts = [
    {
      name: "Abdulkerim",
    },
    {
      name: "Baris",
    },
    {
      name: "Ceren",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Input
        placeholder="Search"
        value={search}
        onChangeText={(e) => setSearch(e)}
      />

      {contacts.map((person, index) => (
        <Styled.Person
          key={index}
          onPress={() => navigate("ViewProfile", { name: person.name })}
        >
          <Text>{person.name}</Text>
        </Styled.Person>
      ))}
    </View>
  );
};

export default Contacts;
