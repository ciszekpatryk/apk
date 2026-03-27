import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../(tabs)/index";
import ListItem from "../../components/ListItem";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const [showEvents, setShowEvents] = useState(false);

    const events = [
        { id: 1, title: "Wykład React", description: "Sala A1. 10:00", location: "Gmach Główny"},
        { id: 2, title: "Warsztaty AI", description: "Sala B2. 12:00", location: "Gmach Mechaniki"},
        { id: 3, title: "Spotkanie koła", description: "Sala C3. 15:00", location: "Gmach Mechaniki"},
    ];

    if (!showEvents) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Lista wydarzeń</Text>

                <Button
                    title="Pokaż wydarzenia"
                    onPress={() => setShowEvents(true)}
                />
            </View>
        );
    }

    return (
        <ScrollView>
            <Button title="Wróć" onPress={() => setShowEvents(false)} />

            {events.map((event) => (
                <ListItem
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    location={event.location}
                    onPress={() =>
                        navigation.navigate("Details", {
                            title: event.title,
                            description: event.description,
                            location: event.location,
                        })
                    }
                />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#7a99d3ff',
        alignItems: 'center',
        marginTop: 67,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})