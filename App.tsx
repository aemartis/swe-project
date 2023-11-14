/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

function Landing({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Manage Profiles"
        onPress={() => navigation.navigate('Manage Profiles')}
      />
      <Button
        title="Profile Landing Page"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ManageProfiles({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Manage Profiles</Text>
      <Button
        title="Go to Create Profiles"
        onPress={() => navigation.navigate('Create Profiles')}
      />
      <Button
        title="Go to Delete Profiles"
        onPress={() => navigation.navigate('Delete Profiles')}
      />
    </View>
  );
}

function CreateProfiles({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create Profiles</Text>
      <Button
        title="Profile Landing Page"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function DeleteProfiles({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Delete Profiles</Text>
    </View>
  );
}

function Preferences({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Preferences</Text>
      <Button
        title="Go to Options"
        onPress={() => navigation.navigate('Options')}
      />
    </View>
  );
}

function Profile({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Preferences</Text>
      <Button
        title="Go to Preferences"
        onPress={() => navigation.navigate('Preferences')}
      />
      <Button
        title="Go to Suggestions"
        onPress={() => navigation.navigate('Suggestions')}
      />
    </View>
    
  );
}

function Options({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Options</Text>
    </View>
    
  );
}

function Suggestions({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Suggestions</Text>
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
    
  );
}

function Menu({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu</Text>
      <Button
        title="Go to Accepted"
        onPress={() => navigation.navigate('Accepted')}
      />
    </View>
    
  );
}

function Accepted({ navigation }: { navigation:any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Accepted</Text>
      <Button
        title="Back to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
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
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Manage Profiles" component={ManageProfiles} />
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
