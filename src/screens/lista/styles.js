import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDD9DB",
  },
  itemList: {
    backgroundColor: "#ECE2E3",
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  modalContentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 14,
  },
  modalItem: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    width: 320,
    height: 200,
  },
  listaContainer: {
    borderWidth: 1,
    marginHorizontal: 20,
  },
});
