import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
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
  },
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: "Lato_900Black",
    fontSize: 32,
    fontWeight: "bold",
  }
});
export default globalStyles;