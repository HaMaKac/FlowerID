import { Image, StyleSheet, Text, View } from "react-native";

const Details = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{route.params.name}</Text>
        <Image style={styles.image} source={require("./flower.jpeg")} />
      </View>
      <View>
        <Text style={styles.description}> about the flower</Text>
      </View>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  title: {
    fontSize: 40,
    padding: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  image: {
    position: "relative",
    left: 80,
  },
  description: {
    position: "relative",
    top: 150,
    margin: 20,
    fontSize: 18,
  },
});
