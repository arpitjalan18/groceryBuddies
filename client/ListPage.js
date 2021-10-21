import React from 'react';
import { StyleSheet, FlatView, View, TextInput, Text, Pressable, FlatList } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';
import { io } from "socket.io-client";

import globalStyles from "./styles";
import ItemSection from "./ItemSection";
import { items,defaultItem } from './constants';
import ItemCreate from './ItemCreate';
import ItemEdit from './ItemEdit';
export default function ListPage(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [data, setData] = React.useState({
    group_name: "Bikini Bottom",
    group_id: "abcdef8",
    items_list: items
  });

  
  const socket = io("http://192.168.0.182:5000", {
    transports: ['websocket'],
  });
  socket.connect(); 
  socket.on("connect", () => {
    alert(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  const [search, onSearch] = React.useState("")
  const [isCheckedArr, updateIsCheckedArr] = React.useState(Array(items.length).fill(false))
  const [checkoutMode, toggleCheckoutMode] = React.useState(false)
  const [currentItemEdit, setCurrentItemEdit] = React.useState(defaultItem);

  const createSheetRef = React.useRef(null);
  const editSheetRef = React.useRef(null);

  React.useEffect(()=>{
    if (isCheckedArr.some((el) => el==true))
      toggleCheckoutMode(true)
    else
      toggleCheckoutMode(false)
  }, [isCheckedArr]);

  const getAmountCheckedOut = () => {
    let amt = 0;
    for(const check of isCheckedArr){
      if (check){
        amt++;
      }
    }
    return amt;
  }

  const onNewItem = () => {
    createSheetRef.current.snapToIndex(0)
  };

  const navCheckoutScreen = () => {
    let id_arr = isCheckedArr.filter((checked) => checked).map((checked, index) => items[index].id);
    props.navigation.navigate("Checkout", {
      ids: id_arr,
    });
  };

  const onEditItem = (item) => {
    setCurrentItemEdit(item);
    editSheetRef.current.snapToIndex(0);
  };
 
  const renderItem = ({item, index}) => {
    const updateParentState = (newValue) => {
      newArr = [...isCheckedArr];
      newArr[index] = newValue;
      updateIsCheckedArr(newArr);
    }
    return(
      <ItemSection item={item} onEditItem ={onEditItem} updateParentState={updateParentState}/>
    );
  };

  const renderSeparator = () => {
    return(
      <View style = {styles.separator}/>  
    );
  };

  if (!fontsLoaded){
    return (
      <Text>Loading</Text>
    )
  }
  else{
    return (
      <View style = {styles.moveToStart}>
        <View style = {styles.containerTop}>
          <Text>{socket.connected ? "aa" : "fuck"}</Text>
          <Text style = {styles.title}>{data.group_name}</Text>
          <Text style = {styles.subText}>
            <Text>Join code: </Text>
            <Text style = {styles.underline}>{data.group_id}</Text>
            <Text> ⋅ </Text>
            <Text style = {styles.accentText}>connected ✓</Text>
          </Text>
          {!checkoutMode && <TextInput
            onChangeText = {onSearch}
            value = {search} 
            style = {styles.search}
            placeholder = {items.length + " items in list"}/>}
          {checkoutMode && <Pressable onPressOut = {navCheckoutScreen}>
            <Text style = {styles.checkout}>
              {"Checkout " + getAmountCheckedOut() + " item in cart"}
            </Text>
          </Pressable>}
        </View>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data = {data.items_list}
          renderItem = {renderItem}   
          contentContainerStyle = {styles.flatListContainer}
          keyExtractor = {(item) => item.id}/>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {onNewItem}>
            <Text style = {[globalStyles.bttn, globalStyles.greenBttn]}>+ New Item</Text>
          </Pressable>
        </View>
        <ItemCreate bottomSheetRef= {createSheetRef}/>
        <ItemEdit bottomSheetRef={editSheetRef} item={currentItemEdit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    backgroundColor: '#ffffff',
    paddingTop: "10%",
    borderWidth: 0,
    padding: 25,
    paddingBottom: "4%",
  },
  search: {
    backgroundColor: "#E9E9E9",
    color: "#636363",
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
    fontSize: 18,
    padding: 8,
    marginTop: 20
  },
  checkout: {
    backgroundColor: "#05A885",
    color: "#FFFFFF",
    borderRadius: 8,
    fontSize: 18,
    padding: 8,
    overflow: 'hidden',
    marginTop: 20
  },
  title: {
    fontFamily: "Lato_900Black",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
  },
  containerBottom: {
    position: "absolute",
    alignSelf: "center",
    bottom: "2%",
    padding: 15,
    paddingTop: 0,
    paddingBottom: 0,
  },
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "gray",
    textAlign: "left",
  },
  underline: {
    textDecorationLine: "underline"
  },
  accentText: {
    color: "#05A885",
  },
  separator: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  moveToStart: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: "flex-start",
  },
  flatListContainer: {
    paddingBottom: "18%",
  },
});
