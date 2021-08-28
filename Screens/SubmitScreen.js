import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import db from '../config'

class SubmitScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      present: 0,
      absent: 0
    }
  }
  presentStudents = () => {
    var ref = db.ref('Students/present');
    var present_val;
    ref.on('value', (data) => {
      present_val = data.val()
    })
    console.log(present_val)
    this.setState({present: present_val})
  }
  absentStudents = () => {
    var ref = db.ref('Students/absent');
    var absent_val;
    ref.on('value', (data) => {
      absent_val = data.val()
    })
    this.setState({absent: absent_val})
  }
  componentDidMount(){
    this.presentStudents
    this.absentStudents
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Present Students🙂🙂 {this.state.present}</Text>
        <Text style={styles.text}>Absent Students😪😪 {this.state.absent}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text:{
    color: 'black',
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  }
});
export default SubmitScreen;
