/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Landing, CreateProfiles,Preferences, Profile, Options, Suggestions, Accepted, MoreInfo } from './Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#eb4034'}}} initialRouteName="Landing">
          <Stack.Screen name="Landing" options={{title: '', headerShown: false}} component={Landing} />
          <Stack.Screen name="Create Profiles" component={CreateProfiles} options={{title: 'Create Profile', headerTintColor: '#fff'}}/>
          <Stack.Screen name="Preferences" component={Preferences} options={{title: 'Filters', headerTintColor: '#fff'}}/>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Suggestions" component={Suggestions} options ={{title: 'Suggestions', headerTintColor: '#fff',}} />
          <Stack.Screen name="MoreInfo" component={MoreInfo} options={{title: 'More Info', headerTintColor: '#fff'}}/>
          <Stack.Screen name="Accepted" component={Accepted} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
