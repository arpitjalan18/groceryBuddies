import React from 'react';
import { StyleSheet, View, TextInput, Text, Pressable, Image, Platform } from 'react-native';
import { useFonts, Lato_400Regular, Lato_900Black } from '@expo-google-fonts/lato';
import { AntDesign } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

import globalStyles from "./styles"

export default function Checkout(props) {
  let [fontsLoaded] = useFonts({
    Lato_400Regular, Lato_900Black
  });

  const [price, setPrice] = React.useState("");
  const [item_ids, updateItemIds] = React.useState(props.route.params.ids);
  const [receipt, setReceipt] = React.useState(null);

  const goToListPage = () => {
    props.navigation.navigate("ListPage")
    alert("Succesfully bought " + item_ids.length + " items");
  }

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,   
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setReceipt(result.uri);
    }
  };

  if (!fontsLoaded){
    return (
      <Text>Loading</Text>
    )
  }
  else{
    return (
      <View style={globalStyles.container}>
        <View style={styles.containerTop}>
          <Text style = {styles.title}>Almost done!</Text>
          <Text style = {styles.subText}>Add some optional, helpful information before saving this cart to your order history.</Text>
          <Image style = {styles.img} source={require('./assets/comp-prch.png')} />
          <Text style = {styles.boldTwo}>1. Confirm your cart</Text>
          <View style = {styles.rowBar}>
            <Text style = {[styles.subText, styles.accentText]}>{"You bought " + item_ids.length + " items."}</Text>
            <Pressable onPressOut = {() => props.navigation.navigate("ListPage")}>
              <AntDesign name="arrowleft" size={24} color="#05A885" />
            </Pressable>
          </View>
          <Text style = {styles.smallText}>Click the arrow if you want to go back and edit it some more. Are you indecisive or just extremely cautious?</Text>
          <Text style = {styles.boldTwo}>2. Upload a receipt</Text>
          <Pressable onPressOut = {pickImage}>
            <View style = {styles.imagePick}>
              {receipt ?
                <>
                  <Text style = {styles.subText}>Image Uploaded</Text>
                  <AntDesign name="check" size={24} color="gray" />
                </>
                :
                <>
                  <AntDesign name="camerao" size={24} color="gray" />
                  <Text style = {styles.subText}>Use Camera</Text>
                </>
              }
            </View>
          </Pressable>
          <Text style = {styles.boldTwo}>3. Input the total cost</Text>
          <TextInput
            onChangeText = {(val) => {setPrice(val.replace("$", ""))}}
            value = {(price == "") ? price : ("$" + price)}
            style = {styles.input}
            placeholder = "Total cost ($)" 
          />
        </View>
        <View style={styles.containerBottom}>
          <Pressable onPressOut = {goToListPage}>
            <Text style = {[styles.bottom, globalStyles.bttn, globalStyles.greenBttn]}>Complete Purchase</Text>
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
  },
  subText: {
    fontFamily: "Lato_400Regular",
    fontSize: 18,
    color: "gray",
    textAlign: "left",
  },
  smallText: {
    fontFamily: "Lato_400Regular",
    fontSize: 14,
    color: "gray",
    textAlign: "left",
  },
  boldTwo: {
    fontFamily: "Lato_900Black",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 45,
    marginBottom: 10,
  },
  input: {
    fontFamily: "Lato_400Regular",
    fontSize: 24,
    color: "#636363",
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor:"#C4C4C4",
    paddingBottom: 10,
  },
  img: {
    width: "100%",
    resizeMode: "cover"
  },
  accentText: {
    color: "#05A885",
  },
  rowBar: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  imagePick: {
    flexDirection: "row",
    backgroundColor: "#e9e9e9",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  }
});
