import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Attendence</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    height: 80,
  },
  text: {
    color: 'white',
    fontSize: 45,
    fontFamily: 'Comic Sans MS',
    margin: 'auto',
    fontWeight: 'bold',
  },
});

export default AppHeader;
