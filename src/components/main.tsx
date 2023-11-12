
import React, { useEffect, useState } from 'react';
import Navigation from 'react-native-navigation';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  PixelRatio,
} from 'react-native';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import DeleteProfile from "./deleteProfile";
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },

  title: {
    flex: 45,
    margin: 30,
    marginTop: 40,
    alignSelf: 'center',
  },

  scrollStyle: {
    alignItems: 'center',
    alignSelf: 'center',

    flex: 45,
    borderWidth: 4,
    borderRadius: 3,
    minHeight: 250,
    maxHeight: 250,
    minWidth: '75%',

    borderColor: "#20232a",

    marginTop: '40%',
    marginBottom: '20%',
  },

  profileButton: {
    flex: 10,
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 12,

    justifyContent: 'space-between',
    backgroundColor: '#fff',

    fontSize: 20,
    textAlign: 'center',

    margin: '.5%',
    marginLeft: '70%',
  },

  profileButtonBottom: {
    flex: 10,
    borderWidth: 3,
    borderColor: "#20232a",
    borderRadius: 12,

    justifyContent: 'space-between',
    backgroundColor: '#fff',

    fontSize: 20,
    textAlign: 'center',

    margin: '.5%',
    marginLeft: '70%',
    marginBottom: '5%',
  }
})

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const small = 20;
const medium = 36;
const large = 72;
  
function Main() { 
    const [profileList, changeEl]  = useState([
        { id : "John", profiles : <Pressable><text>John</text></Pressable>},
        { id : "BONE?!?", profiles : <Pressable><text>BONE?!?</text></Pressable>},
        ]);

    const [exampleState, setExampleState] = useState(profileList);

    const addElement = () => {
        var name = "bob";
        var newArray = [...profileList, {id : name, profiles: <Pressable><text>{name}</text></Pressable>}];
        setExampleState(newArray);
        changeEl(newArray);
    }

    const delProfile = () => {
        var newArray = profileList.filter(i => i.id != "bob");
        setExampleState(newArray);
        changeEl(newArray);
    }
      
    const navigate = useNavigate();
    
    const goToDelete = () => {
      navigate('/deleteProfile');
    }
  
  return ( 
    <View style={styles.container}>

      <Routes>
        <Route path="/deleteProfile" element={<DeleteProfile />}/>
      </Routes>

      <View style={styles.title}>
        <text style={{fontSize: getFontSize(large)}}>B.o.B</text>
      </View>

      <View style={styles.scrollStyle}>
        <ScrollView>
          <FlatList
            keyExtractor = {item => item.id}
            data={exampleState}
            renderItem = {item => (<text style={{fontSize: getFontSize(medium)}}>{item.item.profiles}</text>)}
          />
        </ScrollView>
      </View>

      <View style={styles.profileButton}>
        <Pressable onPress={addElement}>
          <text style={{fontSize: getFontSize(small)}}>Create profile</text>
        </Pressable>
      </View>

      <View style={styles.profileButtonBottom}>
        <Pressable onPress={goToDelete}>
          <text style={{fontSize: getFontSize(small)}}>Delete profile</text>
        </Pressable>
      </View>
    </View>
  ); 
} 
  
export default Main;
