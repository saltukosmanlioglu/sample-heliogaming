import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { asyncStorageLoad } from "../../../app/functions";
import Input from "../../../components/input";

import { navigate } from "../../../navigation";
import * as Styled from "./Tabs.styled";

const Contacts: React.FunctionComponent = () => {
  const [search, setSearch] = useState<string>();
  const [storage, setStorage] = useState<Array<{ name: string }>>([]);

  useFocusEffect(
    useCallback(() => {
      asyncStorageLoad({
        key: "contacts",
        getLoad: (value) => {
          const parsed = JSON.parse(value);

          if (parsed.length === 0) {
            setStorage(parsed);
          } else {
            setStorage(parsed);
          }
        },
      });
    }, [])
  );

  console.log(storage, "storage");

  const handleSearch = (e: string) => {};

  return (
    <View>
      <Input onChangeText={handleSearch} placeholder="Search" value={search} />

      {storage.length > 1 ? (
        storage.map((person, index) => (
          <Styled.Person
            key={index}
            onPress={() => navigate("ViewProfile", { name: person.name })}
          >
            <Text>{person.name}</Text>
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
