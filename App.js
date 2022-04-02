import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'


const App = () => {
  return (
    <View style={styles.base}>
      <StatusBar/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'red'
  }
})

export default App;
