import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart AC App</Text>
      <Text style={styles.description}>Choose Version</Text>
      {/* Buttons to navigate different versions */}
      <Button title="Version 1" onPress={() => navigation.navigate('Home_V1')} />
      <Button title="Version 2" onPress={() => navigation.navigate('Home_V2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
  },
});
