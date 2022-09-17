import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { colors } from "../../constants/colors";
import { LandingScreen } from "../../screens/index";
import { isIOS } from "../../utils/functions";

const Stack = createNativeStackNavigator();

const InicioNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isIOS ? colors.textLight : colors.text,
      }}>
      <Stack.Screen name="Inicio" component={LandingScreen} />
    </Stack.Navigator>
  );
};

export default InicioNavigator;
