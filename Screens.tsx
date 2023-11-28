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
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import dataJSON from './restaurant_data.json';

//style={{height: '30%'}}
//<Image style = {{ marginBottom: '1%', marginTop: '1%', marginRight: '20%', height: 325, width: 325, resizeMode: "contain" }} source ={require('./bob_is_sharp_face.png')}/>

function Landing({ navigation }: { navigation:any}) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style = {{ marginBottom: '20%', marginTop: '40%', height: 150, width: 380, resizeMode: "contain" }} source ={require('./bob2.png')}/>
        <Text style={styles.profileSelectionText}>PROFILE SELECTION</Text>
        <View style = {styles.scrollStyle}>
          <ScrollView fadingEdgeLength={60}>
            <Pressable onPress={() => navigation.navigate('Profile')}>
              <Text style = {styles.profileText}>
                B.O.B.
              </Text>
            </Pressable>
            <Text style = {styles.profileText}>
                B.O.B.1
              </Text>
              <Text style = {styles.profileText}>
                B.O.B.2
              </Text>
              <Text style = {styles.profileText}>
                B.O.B.3
              </Text>
              <Text style = {styles.profileText}>
                B.O.B.4
              </Text>  
              <Text style = {styles.profileText}>
                B.O.B.5
              </Text>
              <Text style = {styles.profileText}>
                B.O.B.6
              </Text>                      
          </ScrollView>          
        </View>
        <Pressable style = {styles.button} onPress={() => navigation.navigate('Create Profiles')}>
          <Text style = {styles.buttonText}>
            Create New Profile
          </Text>
        </Pressable >
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

    const [name, changeName] = useState( dataJSON.at(1)?.name );
    const [logo, changeLogo] = useState( dataJSON.at(1)?.logo );
    const [rating, changeRating] = useState( dataJSON.at(1)?.rating );
    const [range, changeRange] = useState( dataJSON.at(1)?.range );
    const [subType, changesubType] = useState( dataJSON.at(1)?.subtypes );
  
    const changeSuggestion = () => {
      var min = 1
      var max = dataJSON.length
      var num = Math.floor(Math.random() * (max - min + 1)) + min
      changeName( dataJSON.at(num)?.name )
      changeLogo( dataJSON.at(num)?.logo )
      changeRating( dataJSON.at(num)?.rating )
      changeRange( dataJSON.at(num)?.range )
      changesubType( dataJSON.at(num)?.subtypes )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Suggestions</Text>
        <View>
            <Text>
              {name}
            </Text>
            <Text> Google Rating: {rating} </Text>
            <Text> Price range: {range}</Text>
            <Text> {subType} </Text>
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

const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '8%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#eb4034',
    marginBottom: '4%',
    marginTop: '2%',
  },
  buttonText:{
    //fontFamily:'serif',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileText:{
    //fontFamily:'serif',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollStyle:{
    //alignItems: 'center',
    //alignSelf: 'center',

    //flex: 4,
    borderWidth: 4,
    borderRadius: 18,
    minHeight: 150,
    maxHeight: 150,
    minWidth: '85%',

    borderColor: '#eb4034',

    marginTop: '1%',
    marginBottom: '1%',
  },
  profileSelectionText:{
    color:'black', 
    alignItems: 'center', 
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '7%',
  }
})

  export { Landing, ManageProfiles, CreateProfiles, DeleteProfiles,
     Preferences, Profile, Options, Suggestions, Menu, Accepted };
