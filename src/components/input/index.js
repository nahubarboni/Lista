import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const CustomInput = ({
  item,
  onChangeText,
  placeholder,
  onPressButton,
  inputValue,
  buttonText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#4b4b4b"
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <Button
        title={buttonText}
        color="#F45B69"
        onPress={onPressButton}
        disabled={inputValue === ""}
      />
    </View>
  );
};

export default CustomInput;
