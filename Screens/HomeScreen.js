import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import AppHeader from '../components/App_Header';
import Alex from '../components/Alex';
import Mia from '../components/Mia';
import Reggie from '../components/Reggie';
import Katie from '../components/Katie';
import Suga from '../components/Suga';
import ParisBelrec from '../components/ParisBelrec';
import Submit from '../components/Submit';
import AlexPresent from '../components/alexPresent';
import AlexAbsent from '../components/alexAbsent';
import KatiePresent from '../components/katiePresent';
import KatieAbsent from '../components/katieAbsent';
import MiaPresent from '../components/miaPresent';
import MiaAbsent from '../components/miaAbsent';
import ParisBelrecPresent from '../components/parisbelrecPresent';
import ParisBelrecAbsent from '../components/parisbelrecAbsent';
import ReggiePresent from '../components/reggiePresent';
import ReggieAbsent from '../components/reggieAbsent';
import SugaPresent from '../components/sugaPresent';
import SugaAbsent from '../components/sugaAbsent';
import db from '../config';

class HomeScreen extends React.Component {
  componentDidMount() {
    var ref = db.ref('Students/')
    ref.update({
      present: 0,
      absent: 0
    })
    
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View>
          <Alex />
          <AlexPresent />
          <AlexAbsent />
        </View>
        <View>
          <Katie />
          <KatiePresent />
          <KatieAbsent />
        </View>
        <View>
          <Mia />
          <MiaPresent />
          <MiaAbsent />
        </View>
        <View>
          <ParisBelrec />
          <ParisBelrecPresent />
          <ParisBelrecAbsent />
        </View>
        <View>
          <Reggie />
          <ReggiePresent />
          <ReggieAbsent />
        </View>
        <View>
          <Suga />
          <SugaPresent />
          <SugaAbsent />
        </View>
        
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SubmitScreen')}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
  },
  button: {
    backgroundColor: 'pink',
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

export default HomeScreen;
