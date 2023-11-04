import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  PixelRatio,
} from 'react-native';
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

    margin: '10%',
    marginLeft: '70%',
    marginEnd: '10%',
  }
})

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const small = 20;
const medium = 36;
const large = 72;

function App() {
  const [profileList, changeEl]  = useState([
    { id : "0", profiles : <Pressable><text>John</text></Pressable>},
    { id : "1", profiles : <Pressable><text>John and Steve and Randy and Bone</text></Pressable>},
  ]);
  
  const [exampleState, setExampleState] = useState(profileList);
  const [idx, incr] = useState(2);
  
  const addElement = () => {
    var name = "bob";
    var newArray = [...profileList, {id : ""+idx, profiles: <Pressable><text>{name}</text></Pressable>}];
    incr(idx + 1);
    setExampleState(newArray);
    changeEl(newArray);
  }

  const delProfile = () => {
    var newArray = profileList.filter(i => i.id != "0");
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
}

export default App;