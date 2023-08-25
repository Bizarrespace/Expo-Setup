import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}> Open up App.js to start working on your app! {'\n'}</Text>
      <Text> This is test to see if you can add more text {'\n'} </Text>
      <Text style = {styles.Name}> Made by Long Vu</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9c1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
  Name: {
    color: '#D32F2F',
  }
});
