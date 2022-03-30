import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'


const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

export default App;
