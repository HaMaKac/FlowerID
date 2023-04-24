import {Text, View} from "react-native";

const Details = ({navigation, route}) => {

    return(
    <View>
        <Text>{route.params.name}</Text>
        <Text>
            tips about the flower
        </Text>
    </View>)


}

export default Details;
