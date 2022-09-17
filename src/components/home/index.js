import React from "react";
import { View, Button, Text } from "react-native";
import { style } from "./style";

const Home = ({ handlePress }) => {
  return (
    
    <View style={style.container} >
      <Text style={style.title}>Para hacer la lista entrar</Text>
      <View style={style.inicioButton}>
        <Button title="Aqui" onPress={() => handlePress()} color = "#DD9BB2" />
      </View>
    </View>
  );
};

export default Home;
