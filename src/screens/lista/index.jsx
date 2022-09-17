import React, { useState, useEffect } from "react";
import { Text, View, Button, FlatList, SafeAreaView, Image } from "react-native";
import { CustomModal, CustomInput, AddItem } from "../../components/index";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { agregarItem, eliminarItem } from "../../store/actions/carrito.actions";
import { loadLista } from "../../store/actions/carrito.actions";

const ListaScreen = () => {
  const [item, setItem] = useState("");
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const inputvalue = item.trim();

  const dispatch = useDispatch();

  const lista

  const itemList = useSelector((state) => state.carrito.carrito);

  const imageSave = useSelector((state) => state.carrito.list);
  console.log(imageSave);

  const onChangeText = (text) => {
    setItem(text);
  };

  const addItem = () => {
    dispatch(agregarItem(item));
  };

  const onDeleteItem = (id) => {
    dispatch(eliminarItem(id));
    setModalVisible(!modalVisible);
  };

  const onHandlerModal = (id) => {
    setItemSelected(itemList?.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const renderItem = ({ item }) => <AddItem item={item} onHandlerModal={onHandlerModal} />;

  const renderList = ({ item }) => (
    <View>
      {console.log(item)}
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        item={item}
        onChangeText={onChangeText}
        onPressButton={addItem}
        inputValue={inputvalue}
        buttonText="Agregar"
      />
      <View style={styles.listaContainer}>
        <FlatList
          data={imageSave}
          renderItem={renderList}
          keyExtractor={() => Math.random() * Math.random()}
        />
      </View>
      <View style={styles.itemList}>
        <FlatList data={itemList} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <CustomModal animationType="slide" modalVisible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>Detalles de la lista</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}> ¿Estás seguro que deseas eliminar?</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button
              title="Eliminar"
              onPress={() => onDeleteItem(itemSelected.id)}
              color="#F45B69"
            />
            <Button
              title="Cancelar"
              onPress={() => setModalVisible(!modalVisible)}
              color="#cccccc"
            />
          </View>
        </View>
      </CustomModal>
    </SafeAreaView>
  );
};

export default ListaScreen;
