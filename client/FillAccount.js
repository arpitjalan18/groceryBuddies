import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

import globalStyles from "./styles"

export default function FillAccount(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [firstName, onChangeFirstName] = React.useState("");
  const [lastName, onChangeLastName] = React.useState("");
  
  const findHome = () => {
    props.navigation.navigate("Homeless");
  }

  if (!fontsLoaded){
    return (
      <Text>Loading</Text>
    )
  }
  else{
    return (
      <View style={globalStyles.container}>
        <View style={styles.containerTop}>
          <Text style = {styles.title}>Nice to meet you</Text>
          <TextInput
            onChangeText = {onChangeFirstName}
            value = {firstName} 
            style = {styles.input}
            placeholder = "First name"/>
          <TextInput
            onChangeText = {onChangeLastName}
            value = {lastName}
            style = {styles.input}
            placeholder = "Last name"/>
        </View>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {findHome}>
            <Text style = {[styles.bottom, globalStyles.bttn, globalStyles.greenBttn]}>Finish account creation</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: "25%"
  },
  containerBottom: {
    paddingBottom: "10%",
  },
  title: {
    fontFamily: "Lato_900Black",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    padding: 20,
  },
  input: {
    fontFamily: "Lato_400Regular",
    fontSize: 24,
    color: "#636363",
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
    padding: 10,
    margin: 15
  }
});
