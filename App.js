import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import Home from './screens/home'

const App = () => {
  return (
    <View style={styles.base}>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})

export default App;
