import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";

import InicioNavigator from "./inicio";
import CarritoNavigator from "./carrito";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  tabBarIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="InicioTab"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="InicioTab"
        component={InicioNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={24}
                color={colors.primary}
              />
              <Text>Inicio</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="CarritoTab"
        component={CarritoNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name={focused ? "cart-sharp" : "cart-outline"}
                size={24}
                color={colors.primary}
              />
              <Text>Carrito</Text>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
