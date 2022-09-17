import { StyleSheet } from "react-native";
import {CheckBox} from 'react-native-web';

export const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#C7E1E1",
    padding: 20,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  item: {
    fontSize: 18,
    color: "#000000",
  },
  selected: {
   color: 'green',
   fontSize: 18,
  },
  delete: {
    color: "#fff",
    fontSize: 18,
  },
  checkbox: {
    marginRight: 10
  }

});
