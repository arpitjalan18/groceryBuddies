import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons'; 
import globalStyles from './styles';
const ItemCreate = ({bottomSheetRef}) =>{

  // variables
  const snapPoints = useMemo(() => ['81%'], []);

  const [itemName, setItemName] = React.useState("");
  const [itemUnit, setItemUnit] = React.useState("");
  const [itemNote, setItemNote] = React.useState("");
  const [itemAmt, setItemAmt] = React.useState(0);
  // renders
  const addUnitAmt = () => {
    setItemAmt(itemAmt+1)
  }
  const minusUnitAmt = () => {
    if (itemAmt > 0)
      setItemAmt(itemAmt-1)
  }
  const clearInfo = () => {
    setItemName("");
    setItemUnit("");
    setItemNote("");
    setItemAmt(0);
  }
  const verifyInfo = () => {
    if (itemName == "" || itemAmt == 0){
      alert("Please provide item name and amount");
      return false;
    }
    return true;
  }
  const saveAndCreate = () => {
    if(!verifyInfo()) return;
    closeEditor();
  }
  const save = () => {
    if(!verifyInfo()) return;
    closeEditor();
  }
  const closeEditor = () => {
    clearInfo();
    bottomSheetRef.current.close();
    Keyboard.dismiss();
  }

  const closeButton = () => {
    return (
      <View style = {styles.containerClose}>
        <Pressable onPressOut = {closeEditor} pressRetentionOffset ={{ bottom: 50, left: 50, right: 50, top: 50}}>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
    );
  }
  return (
      <BottomSheet
        snapPoints={snapPoints}
        index = {-1}
        ref = {bottomSheetRef}
        handleComponent = {closeButton}
        style = {styles.container}
      >
        <View style={styles.contentContainer}>
          <Text style = {styles.subText}>Enter Item Details</Text>
          <TextInput
            onChangeText = {setItemName}
            value = {itemName} 
            style = {styles.input}
            placeholder = "Name"
          />
          <View style = {styles.rowBox}>
            <View style = {styles.innerRowBox}>
              <Pressable onPressOut = {minusUnitAmt}>
                <AntDesign name="minuscircleo" size={28} color={itemAmt > 0 ? "black"  : "grey"} />
              </Pressable>
              <Text style = {[globalStyles.title, styles.textPadder]}>{itemAmt}</Text>
              <Pressable onPressOut = {addUnitAmt}>
                <AntDesign name="pluscircleo" size={28} color="black" />
              </Pressable>
            </View>
            <TextInput
              onChangeText = {setItemUnit}
              value = {itemUnit} 
              style = {styles.inputSmall}
              placeholder = "Enter Unit Type"
            />
          </View>
          <TextInput
            onChangeText = {setItemNote}
            value = {itemNote} 
            style = {styles.inputNotes}
            placeholder = "Add an optional note"
            multiline
            blurOnSubmit
          />
          <View style = {{marginTop: 60}}>
            <Pressable onPressOut={saveAndCreate}>
              <Text style = {styles.addItemCreate}>
                Save item and add another
              </Text>
            </Pressable>
          </View>
        </View>
        <View style = {styles.containerBottom}>
          <Pressable onPressOut={save}>
            <Text style = {[globalStyles.greenBttn, globalStyles.bttn]}>
              Save item
            </Text>
          </Pressable>
        </View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  textPadder: {
    paddingLeft: 15,
    paddingRight: 15
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop: 0,
  },
  rowBox:{
    flexDirection: "row",
    paddingTop: 25,
    justifyContent: "space-between"
  },
  innerRowBox:{
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontFamily: "Lato_900Black",
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
    paddingTop: 15,
    paddingBottom: 9,
  },
  inputSmall : {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    minWidth: "30%",
    color: "#000000",
    textAlign: "right",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
  },
  inputNotes : {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "#000000",
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
    paddingBottom: 8,
    paddingTop: 25,
  },
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "gray",
    textAlign: "left",
  },
  addItemCreate:{ 
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    textAlign: "left",
    textDecorationLine: "underline",
    color: "#057E64",
  },
  containerBottom: {
    paddingBottom: "10%",
    padding: 20,
  },
  containerClose: {
    paddingRight: 15,
    paddingTop: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
export default ItemCreate;