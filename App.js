import React, {Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Pot from './Pot';
import ActionButton from 'react-native-action-button';

export default class App extends Component {
  state = {
    items: [{text: 'Pot 1'}]
  }

  
  handleDelete = text => {
    const items = this.state.items.filter(item => item.text !== text)
    this.setState({ items: items})
  }

  handleAdd = () => {
    const text = 'Pot ' + (this.state.items.length + 1);
    this.setState({
      items: this.state.items.concat({text})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.begginingBar}>
          <Text style={styles.sidepotText}>sidepot</Text>
        </View>
        <ScrollView>
          {this.state.items.map((localState, index) => (
              <Pot key={index} text={localState.text} onDelete={this.handleDelete}/>
          ))}
        </ScrollView>
        <ActionButton 
          buttonColor="rgba(231, 31, 64, 1)"
          onPress={this.handleAdd}
          position="right"/>
      </View>
    )
  }
    
  
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
