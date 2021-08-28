import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import db from '../config'

class MiaPresent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
    };
  }
  changeColor = () => {
    this.setState({ color: 'green' });
    var miaPresent_ref = db.ref('Students/'+3+'/')
    miaPresent_ref.update({
      attendance: "present"
    })
    var present_ref = db.ref('Students/')
    var present_val_ref = db.ref('Students/present')
    var present_val;
    present_val_ref.on("value", (data) => {
      present_val = data.val()
    })
    console.log(present_val)
    present_ref.update({
      present: present_val+1 
    })
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.container, { backgroundColor: this.state.color }]}
          onPress={this.changeColor}>
          <Text style={styles.text}>Present</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 130,
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

export default MiaPresent;
