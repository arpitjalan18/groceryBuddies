import React, { useEffect } from 'react';
import CustomCheck from './CustomCheck';
import { StyleSheet, FlatView, View, TextInput, Text, Pressable, FlatList } from 'react-native';

export default function RequestList({user_list}){
  return(
    <View style = {styles.container}>
      {user_list.map((user) => (
        <View style = {styles.rowContainer}>
          <Text style = {styles.itemName}>{user.first_name + " " + user.last_name}</Text>
          <Text style = {styles.subText}>{"Wants " + user.amount_wanted}</Text>   
        </View> 
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  itemName:{ 
    fontFamily: "Lato_400Regular",
    fontSize: 22,
    textAlign: "left",
  },
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    color: "gray",
    textAlign: "left",
  },
  container: {
    marginVertical: 20,
  },
  rowContainer: {
    paddingVertical: 5,
  }
})
