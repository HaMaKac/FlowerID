import { useEffect, useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { launchCamera } from "react-native-image-picker";
import { addFlower, getFlowers } from "../redux/actions";
import uuid from "react-native-uuid";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [data, setData] = useState();
  const [newFlower, setNewFlower] = useState("");

  useEffect(() => {
    getFlowers().then((r) => setData(r));
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Pick an image from camera roll"
        color="#1b6b14"
        onPress={pickImage}
      />
      {image && (
        <>
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          <Button
            title="Add flower"
            color="#1b6b14"
            onPress={() => {
              addFlower(
                JSON.stringify({
                  id: uuid.v4(),
                  name: newFlower,
                })
              );
            }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
