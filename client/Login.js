import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

import globalStyles from "./styles"

export default function Login(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  
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
      <View style = {globalStyles.container}>
        <View style={styles.containerTop}>
          <Text style = {styles.title}>Sign in</Text>
          <TextInput
            onChangeText = {onChangeEmail}
            value = {email} 
            style = {styles.input}
            placeholder = "Email"/>
          <TextInput
            onChangeText = {onChangePassword}
            value = {password}
            style = {styles.input}
            placeholder = "Password"
            secureTextEntry/>
        </View>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {findHome}>
            <Text style = {[styles.bottom, globalStyles.bttn, globalStyles.greenBttn]}>Submit</Text>
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
  },
  containerBottom: {
    paddingBottom: "10%",
  }
});
