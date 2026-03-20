import { StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
    title: string;
    description: string;
    location: string;
};

export default function ListItem({ title, description, location }: ListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
            <Text>{location}</Text>
        </View>
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