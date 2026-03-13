import { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  function Header() {
    return (
      <View>
        <Text style={{fontSize: 24}}>Aplikacja Studencka</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Licznik</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Zwiększ" onPress={() => setCount(count + 1)} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        marginTop: 10,
    },
});

