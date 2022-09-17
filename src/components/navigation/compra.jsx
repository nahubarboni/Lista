import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen, ListaScreen } from "../../screens";

const Stack = createNativeStackNavigator();

const ListaNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Lista" component={ListaScreen} />
    </Stack.Navigator>
  );
};

export default ListaNavigator;
