/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Landing, ManageProfiles, CreateProfiles, DeleteProfiles,Preferences, Profile, Options, Suggestions, Menu, Accepted } from './Screens';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: '#eb4034'}}} initialRouteName="Landing">
          <Stack.Screen name="Landing" options={{title: '', headerShown: false}} component={Landing} />
          <Stack.Screen name="Create Profiles" component={CreateProfiles} />
          <Stack.Screen name="Delete Profiles" component={DeleteProfiles} />
          <Stack.Screen name="Preferences" component={Preferences} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Suggestions" component={Suggestions} />
          <Stack.Screen name="Menu" component={Menu} />
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
