import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import db from '../config';

class ReggieAbsent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
    };
  }
  changeColor = () => {
    this.setState({ color: 'red' });
    var reggieAbsent_ref = db.ref('Students/'+5+'/')
    reggieAbsent_ref.update({
      attendance: "absent"
    })
    var absent_ref = db.ref('Students/')
    var absent_val_ref = db.ref('Students/absent')
    var absent_val;
    absent_val_ref.on("value", (data) => {
      absent_val = data.val()
    })
    console.log(absent_val)
    absent_ref.update({
      absent: absent_val+1 
    })
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.container, { backgroundColor: this.state.color }]}
          onPress={this.changeColor}>
          <Text style={styles.text}>Absent</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 240,
    width: 80,
    height: 20,
    marginTop: -35,
  },
  text: {
    color: 'black',
    margin: 'auto',
    marginTop: -5,
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
  },
});

export default ReggieAbsent;
