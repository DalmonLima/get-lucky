import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/home'

const statusBarHeight = Constants.statusBarHeight

const App = () => {
  return (
    <View style={styles.base}>
      <StatusBar/>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Home style={styles.test} />
      </SafeAreaView>
    </View>
  );
}

//StatusBar.currentHeight

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  test: {
    flex: 1
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 0
  }
})

export default App;
