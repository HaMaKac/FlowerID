import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { getFlowers } from "../redux/actions";

type ItemData = {
  id: string;
  name: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <Text style={[styles.title, { color: textColor }]}>{item.name}</Text>
    </TouchableOpacity>
  </>
);

const Home = ({ navigation }) => {
  let [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    let backgroundColor = "#caffc2";
    const color = "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate("Details", { name: item.name });
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const [data, setData] = useState();

  useEffect(() => {
    getFlowers().then((r) => setData(r));
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
      <Button
        title="Add flower"
        onPress={() => navigation.navigate("ImagePicker")}
        color="#1b6b14"
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    textTransform: "capitalize",
  },
});
