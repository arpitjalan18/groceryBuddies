import React, { useEffect } from 'react';
import CustomCheck from './CustomCheck';
import { StyleSheet, FlatView, View, TextInput, Text, Pressable, FlatList } from 'react-native';

import ItemEdit from './ItemEdit';
import { items } from './constants';
export default function ItemSection({item, onEditItem, updateParentState}){
  let totalWanted = 0;
  item.user_list.forEach(u => totalWanted += u.amount_wanted);

  const [isChecked, updateIsChecked] = React.useState(false);

  React.useEffect(()=>{
    updateParentState(isChecked)
  }, [isChecked]);

  const [pressedIn, SetPressedIn] = React.useState(false)

  return(
    <Pressable onPressIn = {() => {SetPressedIn(true)}} onPressOut = {() => {SetPressedIn(false)}} onLongPress={() => {onEditItem(item)}}>
      <View style = {[styles.padder, styles.nameBar, pressedIn && !isChecked  && styles.greyBacking, isChecked && styles.greenBacking]}>
        <View>
          <CustomCheck isChecked = {isChecked} updateIsChecked = {updateIsChecked}/>
        </View>
        <View style = {styles.textBox}>
          <View style = {[styles.nameBar, styles.textBar]}>
            <Text style = {[styles.itemName]}>{item.name}</Text>
            <Text style = {[styles.itemName]}>{totalWanted + (item.units.length > 0 ? (" " + item.units) : "")}</Text>
          </View>
          <Text style = {styles.subText}>{item.notes}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "gray",
    textAlign: "left",
  },
  padder: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemName:{ 
    fontFamily: "Lato_400Regular",
    fontSize: 22,
    textAlign: "left",
  },
  underline: {
    textDecorationLine: "underline"
  },
  accentText: {
    color: "#05A885",
  },
  nameBar: {
    flexDirection: 'row',
  },
  textBar: {
    justifyContent: "space-between",
  },
  greenBacking: {
    backgroundColor: "rgba(5, 168, 133, 0.15)"
  },
  greyBacking: {
    backgroundColor: "rgba(191, 191, 191, 0.15)"
  },
  textBox: {
    marginLeft: 5,
    flex: 1,
  }
});
