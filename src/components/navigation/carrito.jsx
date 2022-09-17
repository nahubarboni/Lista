import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { colors } from "../../constants/colors";
import { ListaScreen } from "../../screens/index";
import { isIOS } from "../../utils/functions";

const Stack = createNativeStackNavigator();

const CarritoNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Carrito"
      screenOptions={{
        headerStyle: {
          backgroundColor: isIOS ? colors.primary : colors.secondary,
        },
        headerTintColor: isIOS ? colors.textLight : colors.text,
      }}>
      <Stack.Screen name="Carrito" component={ListaScreen} />
    </Stack.Navigator>
  );
};

export default CarritoNavigator;
