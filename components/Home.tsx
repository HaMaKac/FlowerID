import {Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useState} from "react";

type ItemData = {
    id: string;
    title: string;
};

const DATA: ItemData[] = [
    {
        id: '1',
        title: 'Rose',
    },
    {
        id: '2',
        title: 'Lily',
    },
    {
        id: '3',
        title: 'Tulip',
    },
    {
        id: '4',
        title: 'Orchid',
    },
    {
        id: '5',
        title: 'Hyacinth',
    },
    {
        id: '6',
        title: 'Chrysanthemum',
    }
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
        <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
);

const Home = ({navigation}) => {

    const [selectedId, setSelectedId] = useState<string>();

    const renderItem = ({item}: {item: ItemData}) => {
        const backgroundColor = item.id === selectedId ? '#1b6b14' : '#caffc2';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    navigation.navigate('Details', {name: item.title})
                }}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        );
    };


    return (<><SafeAreaView style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}/>
    </SafeAreaView>
        <Button
            title="button"
        />
    </>)

}

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
    },
    title: {
        fontSize: 24,
    },
});
