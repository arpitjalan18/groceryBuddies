import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

import globalStyles from "./styles"

export default function CreateAccount(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirm, onChangeConfirm] = React.useState("");
  
  const fillAccount = () => {
    props.navigation.navigate("FillAccount")
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
          <Text style = {styles.title}>Create an account</Text>
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
          <TextInput
            onChangeText = {onChangeConfirm}
            value = {confirm}
            style = {styles.input}
            placeholder = "Confirm Password" 
            secureTextEntry/>
        </View>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {fillAccount}>
            <Text style = {[styles.bottom, globalStyles.bttn, globalStyles.greenBttn]}>Get started</Text>
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
