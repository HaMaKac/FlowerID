import { Image, StyleSheet, Text, View } from "react-native";
import flower from "../flowers_description.json";

const Details = ({ navigation, route }) => {
  let description;

  for (let flowerKey in flower) {
    if (flowerKey === route.params.name) {
      description = flower[flowerKey.toString()];
    }
  }

  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>{route.params.name}</Text>
          <Image style={styles.image} source={require("./flower.jpeg")} />
        </View>
        <View>
          <Text style={styles.description}> {description} </Text>
        </View>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#e2fddd",
    height: "100%",
  },
  header: {},
  title: {
    fontSize: 35,
    padding: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    textTransform: "uppercase",
  },
  image: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 30,
    width: "50%",
  },
  description: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "80%",
    fontSize: 20,
    textAlign: "justify",
  },
});
