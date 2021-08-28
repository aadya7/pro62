import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

class Submit extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    margin: 'auto',
    width: 160,
    height: 40,
    marginTop: 10,
  },
  text: {
    color: 'white',
    margin: 'auto',
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
  },
});

export default Submit;
