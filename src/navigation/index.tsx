import React, { createRef } from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";

import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigation from "./RootNavigation";

const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
}
