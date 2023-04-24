import { useRef, useState } from "react";
import { Button, Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { launchCamera } from "react-native-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
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

  const camera = async () =>
    await launchCamera({ mediaType: "photo" }, (res) => {
      console.log("Response = ", res);
    }).then((r) => {});

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Take a picture" onPress={camera} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
