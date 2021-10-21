import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';
import { StatusBar } from 'expo-status-bar';

export default function Homeless(props) {

  const createHome = () => {
    props.navigation.navigate("CreateHome")
  }
  const joinHome = () => {
    props.navigation.navigate("JoinHome")
  }
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });
  if (!fontsLoaded){
    return (
      <Text>Loading</Text>
    )
  }
  else{
    return (
      <View style={styles.container}>
        <Image source={require('./assets/donut.png')} />
        <Text style = {styles.title}>You're Homeless :(</Text>
        <Text style = {styles.subText}>Nothing takes the place of a home, but maybe this donut will keep you busy while you find yours!</Text>
        <Pressable onPressOut = {joinHome}>
          <Text style = {[styles.bttn, styles.greenBttn]}>Join a home</Text>
        </Pressable>
        <Pressable onPressOut = {createHome}>
          <Text style = {[styles.bttn, styles.whiteBttn]}>Create a new home</Text>
        </Pressable>
        <StatusBar></StatusBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: "25%",
  },
  title: {
    fontFamily: "Lato_900Black",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    marginBottom: 30,
    color: "gray",
    textAlign: "center",
  },
  bttn: {
    fontFamily: "Lato_400Regular",
    fontSize: 22,
    borderRadius: 8,
    padding: 14,
    minWidth: "95%",
    textAlign: "center",
    overflow: "hidden",
  },
  greenBttn: {
    color: "white",
    backgroundColor: "#05A885",
  },
  whiteBttn: {
    margin: 15,
    backgroundColor: "white",
    color: "#05A885",
    borderWidth: 1,
    borderColor: "#05A885",
  }
});
