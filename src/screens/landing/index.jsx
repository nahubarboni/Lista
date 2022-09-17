import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";

import { ImageSelector } from "../../components";
import { useDispatch } from "react-redux";
import { agregarLista } from "../../store/actions/carrito.actions";

const LandingScreen = () => {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const onHandleImageSelect = (imageUrl) => {
    setImage(imageUrl);
  };
  const onHandleSubmit = () => {
    dispatch(agregarLista(image));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenido</Text>
      <ImageSelector onImage={onHandleImageSelect} />
      <Button title="OK" onPress={onHandleSubmit} />
    </View>
  );
};

export default LandingScreen;
