import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, Image } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';

import globalStyles from "./styles"

export default function JoinHome(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [homeCode, onChangeHomeCode] = React.useState("");
 
  const findHome = () => {
    props.navigation.navigate("ListPage");
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
          <Text style = {styles.title}>Join a home</Text>
          <Image styles = {styles.image} source={require('./assets/add-group.png')} />
          <TextInput
            onChangeText = {onChangeHomeCode}
            value = {homeCode} 
            style = {styles.input}
            placeholder = "Join code"/>
        </View>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {findHome}>
            <Text style = {[styles.bottom, globalStyles.bttn, globalStyles.greenBttn]}>Join</Text>
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
    marginBottom: 15,
  },
  input: {
    fontFamily: "Lato_400Regular",
    fontSize: 24,
    color: "#636363",
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
    padding: 10,
    margin: 15,
    marginTop: 30
  },
});
