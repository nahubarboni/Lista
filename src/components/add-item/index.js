import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddItem = ({ item, onHandlerModal }) => {
  const [isSelected, setSelection] = useState(false);
  console.log(item);
  return (
    <View style={styles.itemContainer} key={item.id}>
      <Text style={isSelected ? styles.selected : styles.item}>
        {item.value}
      </Text>
      <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
