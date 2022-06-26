import AsyncStorage from "@react-native-async-storage/async-storage";

import { AsyncStorageLoadProps, KeyValueProps } from "./types";

export const asyncStorageSave = async ({ key, value }: KeyValueProps) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const asyncStorageLoad = async ({
  getLoad,
  key,
}: AsyncStorageLoadProps) => {
  try {
    await AsyncStorage.getItem(key).then((value) => {
      if (value) {
        getLoad(value);
      } else {
        getLoad("[]");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
