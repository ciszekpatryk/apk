import { StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
    title: string;
    description: string;
    location: string;
    onPress?: () => void;
};

import { TouchableOpacity } from "react-native";

export default function ListItem({ title, description, location, onPress }: ListItemProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text>{description}</Text>
                <Text>{location}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#7a99d3ff',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})