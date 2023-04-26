import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl, getFlowers, updateFlower } from "../redux/actions";
import axios from "axios";

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: "1",
    title: "king protea",
  },
  {
    id: "2",
    title: "purple coneflower",
  },
  {
    id: "3",
    title: "stemless gentian",
  },
  {
    id: "4",
    title: "garden phlox",
  },
  {
    id: "5",
    title: "daffodil",
  },
  {
    id: "6",
    title: "primula",
  },
];

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
      <Image
        style={{ height: 50, width: 60, marginRight: 20 }}
        source={require("./flower.jpeg")}
      />
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
  </>
);

const Home = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: ItemData }) => {
    let backgroundColor = item.id === selectedId ? "#1b6b14" : "#caffc2";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate("Details", { name: item.title });
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const dispatch = useDispatch();

  const flower = useSelector((state: any) => state.flower);

  const [newFlower, setNewFlower] = useState("");

  const saveFlower = () => {
    if (newFlower === "") return;
    dispatch(updateFlower(newFlower));
    console.log("get");
    getFlowers().then((r) => {});
  };

  return (
    <>
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 12,
            padding: 8,
            color: "white",
          }}
          onChangeText={(text) => setNewFlower(text)}
          value={newFlower}
          placeholder="New Username"
          placeholderTextColor="white"
        />
        <Button title="Save" onPress={() => saveFlower()} />
      </View>
      <SafeAreaView>
        <Text>Welcome {flower.flower}!</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
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
