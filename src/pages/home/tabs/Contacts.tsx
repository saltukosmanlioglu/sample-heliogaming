import React, { useState } from "react";
import { Text, View } from "react-native";

import { navigate } from "navigation";
import Input from "components/input";

import { ContactsProps, PeopleProps } from "./types";
import * as Styled from "./Tabs.styled";

const Contacts: React.FunctionComponent<ContactsProps> = ({ storage }) => {
  const [search, setSearch] = useState<string>("");

  const filterContacts = (person: PeopleProps) => {
    if (search === "") {
      return person;
    } else if (
      person.address.toLocaleLowerCase().includes(search.toLowerCase()) ||
      person.company.toLocaleLowerCase().includes(search.toLowerCase()) ||
      person.fullName.toLocaleLowerCase().includes(search.toLowerCase()) ||
      person.phoneNumber.includes(search)
    ) {
      return person;
    }
  };

  return (
    <View>
      {storage.length > 1 && (
        <Input
          placeholder="Search"
          value={search}
          onChangeText={(e) => setSearch(e)}
        />
      )}

      {storage?.length > 0 ? (
        storage
          .sort((a, b) => (a.fullName > b.fullName ? 1 : -1))
          .filter(filterContacts)
          .map((person, index) => (
            <Styled.Person
              key={index}
              onPress={() =>
                navigate("ViewProfile", {
                  index,
                  data: storage,
                })
              }
            >
              <Text>{`${person.fullName} \n`}</Text>
              <Text> - Address: {person.address}</Text>
              <Text> - Company: {person.company}</Text>
              <Text> - Phone number: {person.phoneNumber}</Text>
            </Styled.Person>
          ))
      ) : (
        <Text style={{ marginTop: 10, textAlign: "center" }}>
          The person could not be found. If you want to create a contact go to
          the Add Number tab.
        </Text>
      )}
    </View>
  );
};

export default Contacts;
