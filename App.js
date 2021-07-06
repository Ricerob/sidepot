import React, {useState} from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Pot from './Pot';

export default function App() {
  const [statePots, setStatePots] = useState([{ text: 'Smells like Badussy'}]);
  
  const onButtonPress = () => {
    setStatePots( arr => [...arr, {text: `Wet Booty Dick and Pussy :-)`}])
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.begginingBar}>
        <Text style={styles.sidepotText}>sidepot</Text>
      </View>
      <ScrollView>
        {statePots.map((localState, index) => (
          <Pot key={index} name={localState.text}></Pot>
        ))}
        <Button onPress={onButtonPress} title="What does that mean?"></Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED'
  },
  statusstyle: {
    color: '#176e27'
  },
  begginingBar: {
    backgroundColor: 'white',
    height: '13%',
    width: '100%',
    justifyContent: 'center'
  },
  sidepotText: {
    color: '#E71F40',
    fontSize: 28,
    marginStart: 20,
    marginTop: 20
  }
});
