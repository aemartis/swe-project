import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react';
import { useState } from 'react'
import {
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import dataJSON from './restaurant_data.json';

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

  function Preference(){

    const DATA = [
        {key: 'Vegetarian'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
    ]

    return(
        <SafeAreaView>
            <FlatList
                contentContainerStyle = {{flexDirection: 'column'}}
                numColumns={3}
                data = {DATA}
                renderItem={({item}: {item:any}) => 
                    <BouncyCheckbox 
                        textStyle={{ textDecorationLine: "none",}} 
                        text = {item.key} 
                        onPress={(isChecked: boolean) => {}} 
                    /> 
                }
            />
        </SafeAreaView>
    )
  }
  
  function Preferences({ navigation }: { navigation:any}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Preferences</Text>
        <Button
          title="Go to Options"
          onPress={() => navigation.navigate('Options')}
        />
        <Preference />
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

    const [logo, changeLogo] = useState( dataJSON.at(1)?.logo );
    const [rating, changeRating] = useState( dataJSON.at(1)?.rating );
  
    const changeSuggestion = () => {
      var min = 1
      var max = dataJSON.length
      var num = Math.floor(Math.random() * (max - min + 1)) + min
      changeLogo( dataJSON.at(num)?.logo )
      changeRating( dataJSON.at(num)?.rating )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Suggestions</Text>
        <View>
            <Image
              resizeMode="cover"
              source={{uri:logo}} />
            <Text> 
                Yelp Rating:
            </Text>
            <Text> {rating}</Text>
        </View>
        <Button
          title="Go to Menu"
          onPress={() => navigation.navigate('Menu')}
        />
        <Button
          title="Change Suggestion"
          onPress={changeSuggestion}
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

  export { Landing, ManageProfiles, CreateProfiles, DeleteProfiles,
     Preferences, Profile, Options, Suggestions, Menu, Accepted };
