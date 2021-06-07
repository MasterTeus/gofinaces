import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRouter() {
  return (
    <Navigator>
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}
