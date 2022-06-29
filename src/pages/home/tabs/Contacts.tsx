import React, { useState } from "react";
import { Text, View } from "react-native";

import { navigate } from "../../../navigation";
import Input from "../../../components/input";

import { ContactsProps } from "./types";
import * as Styled from "./Tabs.styled";

const Contacts: React.FunctionComponent<ContactsProps> = ({ storage }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <View>
      <Input
        placeholder="Search"
        value={search}
        onChangeText={(e) => setSearch(e)}
      />

      {storage?.length > 0 ? (
        storage
          .filter((person) => {
            if (search === "") {
              return person;
            } else if (
              person.fullName.toLocaleLowerCase().includes(search.toLowerCase())
            ) {
              return person;
            }
          })
          .map((person, index) => (
            <Styled.Person
              key={index}
              onPress={() =>
                navigate("ViewProfile", {
                  index,
                  data: storage,
                  name: person.fullName,
                })
              }
            >
              <Text>{person.fullName}</Text>
            </Styled.Person>
          ))
      ) : (
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          The person could not be found. If you want to create a contact go to
          the Add Number tab.
        </Text>
      )}
    </View>
  );
};

export default Contacts;
