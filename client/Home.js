import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';
import { StatusBar } from 'expo-status-bar';

export default function Home(props) {

  const createAccount = () => {
    props.navigation.navigate("CreateAccount")
  }
  const login = () => {
    props.navigation.navigate("Login")
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
        <Image source={require('./assets/home.png')} />
        <Text style = {styles.title}>Groceries with Buddies</Text>
        <Text style = {styles.subText}>A real time grocery list. No more awkward group chats. Did you get the avocados? Yes. Yes I did. Check Groceries with Buddies!</Text>
        <Pressable onPressOut = {createAccount}>
          <Text style = {[styles.bttn, styles.greenBttn]}>Create an account</Text>
        </Pressable>
        <Pressable onPressOut = {login}>
          <Text style = {[styles.bttn, styles.whiteBttn]}>Sign in</Text>
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
