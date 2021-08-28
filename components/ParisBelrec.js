import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

class ParisBelrec extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>ParisBelrec</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Comic Sans MS',
    margin: 10,
  },
});

export default ParisBelrec;
