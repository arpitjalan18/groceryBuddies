import React from 'react';
import { StyleSheet, Image, Pressable, FlatList, View } from 'react-native';

export default function CustomCheck({isChecked, updateIsChecked}){
  const toggler = () => {
    if (isChecked){
      updateIsChecked(false);
    }
    else{
      updateIsChecked(true);
    }
  }
  return(
    <Pressable onPressOut = {toggler}>
      <View style = {[styles.circle, isChecked ? styles.circleGreen : styles.circle]}>
        <Image source={require('./assets/Vectorcheckvec.png')}></Image>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  circle: {
    display: "flex",
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  circleGreen: {
    backgroundColor: "#05A885",
    borderColor: "#05A885",
  },
});