import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Music from './components/Music';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Music1 from './components/Music1';

const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Music" component={Music} />
          <Stack.Screen name="Music1" component={Music1} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
