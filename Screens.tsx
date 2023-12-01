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
  Linking,
} from 'react-native';
import dataJSON from './restaurant_data.json';
import attributes from "./attributes3.json"
import {imageSource} from './imageSource';

var suggestNum = 0;

var rejectArray:string[]=[];

//style={{height: '30%'}}
//<Image style = {{ marginBottom: '1%', marginTop: '1%', marginRight: '20%', height: 325, width: 325, resizeMode: "contain" }} source ={require('./bob_is_sharp_face.png')}/>

function Landing({ navigation }: { navigation:any}) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image style = {{ marginBottom: '20%', marginTop: '40%', height: 150, width: 380, resizeMode: "contain" }} source ={require('./images/UI/bob2.png')}/>
        <Text style={styles.profileSelectionText}>PROFILE SELECTION</Text>
        <View style = {styles.scrollStyle}>
          <ScrollView fadingEdgeLength={60}>
            <Pressable onPress={() => navigation.navigate('Suggestions')}>
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
          title="Get Suggestions"
          onPress={() => navigation.navigate('Suggestions')}
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

    function onCheck(check:boolean, item:any) {
      if (check == true) {
        rejectArray.push(item)
      } else {
        for (var i = 0; i < rejectArray.length; i++) {
          if (rejectArray[i].match(item)) {
            rejectArray.splice(i, 1)
          }
        }
      }
    }

    var attributeArray:string[] = []
    for (var i = 0; i < attributes.length; i++) {
      attributeArray[i] = ""+attributes.at(i)?.[0]
    }

    var array1:string[] = [attributeArray[0]], array2:string[] = [attributeArray[1]], array3:string[] = [attributeArray[2]]
    for (var i = 3; i < attributeArray.length; i+=3) {
      array1[i-(2*(i/3))] = attributeArray[i]
      if (i+1 < attributeArray.length) {
        array2[i-(2*(i/3))] = attributeArray[i+1]
      }
      if (i+2 < attributeArray.length) {
        array3[i-(2*(i/3))] = attributeArray[i+2]
      }
    }

    rejectArray = [];

    return(
        <View>
          <View style={styles.prefView}>
            <FlatList
              style={styles.prefList}
              data = {array1}
              renderItem={({item}: {item:any}) => 
              <BouncyCheckbox 
                  style={styles.checkboxes}
                  textContainerStyle={styles.prefTextContainer}
                  fillColor="#eb4034"
                  textStyle={styles.prefTextStyle} 
                  text = {item} 
                  onPress={(isChecked: boolean) => {
                    onCheck(isChecked,item)
                  }}/> }
              />
            <FlatList
              style={styles.prefList}
              data = {array2}
              renderItem={({item}: {item:any}) => 
                <BouncyCheckbox 
                    style={styles.checkboxes}
                    textContainerStyle={styles.prefTextContainer}
                    fillColor="#eb4034"
                    textStyle={styles.prefTextStyle} 
                    text = {item} 
                    onPress={(isChecked: boolean) => {
                      onCheck(isChecked,item)
                    }}/> }
              />
            <FlatList
              style={styles.prefList}
              data = {array3}
              renderItem={({item}: {item:any}) => 
              <BouncyCheckbox 
                  style={styles.checkboxes}
                  textContainerStyle={styles.prefTextContainer}
                  fillColor="#eb4034"
                  textStyle={styles.prefTextStyle} 
                  text = {item} 
                  onPress={(isChecked: boolean) => {
                    onCheck(isChecked,item)
                  }}/> }
              />
          </View>
        </View>
    )
  }
  
  function Preferences({ navigation }: { navigation:any}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  
//<Text style = {styles.suggestionsButtonText}>More info please!</Text>
//<Text style = {styles.suggestionsButtonText}>New suggestion!</Text>
  function Suggestions({ navigation }: { navigation:any}) {
    function checkReject(subtypes:string) {
      var returnBool = false
      for (var i = 0; i < rejectArray.length; i++) {
        if (subtypes.includes(rejectArray[i])) {
          returnBool = true
        }
      }

      return returnBool
    }

    var picture = imageSource(suggestNum);

    const [name, changeName] = useState( dataJSON.at(suggestNum)?.name );
    const [logo, changeLogo] = useState( picture );
    const [rating, changeRating] = useState( dataJSON.at(suggestNum)?.rating );
    const [range, changeRange] = useState( dataJSON.at(suggestNum)?.range );
    const [subType, changesubType] = useState( dataJSON.at(suggestNum)?.subtypes );
  
    const changeSuggestion = () => {
      var min = 0
      var max = dataJSON.length
      var num = Math.floor(Math.random() * (max - min + 1)) + min
      
      var counter = 0
      while (checkReject(""+dataJSON.at(num)?.subtypes ) && counter < max) {
        num = Math.floor(Math.random() * (max - min + 1)) + min
        counter++
      }

      suggestNum = num;
      picture = imageSource(num);

      changeName( dataJSON.at(num)?.name )
      changeLogo( picture )
      changeRating( dataJSON.at(num)?.rating )
      changeRange( dataJSON.at(num)?.range )
      changesubType( dataJSON.at(num)?.subtypes )
    }
    return (
      <View>
        <View>
          <Image source = {logo} style={{width: 300, height: 300, alignItems: 'center', alignSelf: 'center', resizeMode: "contain"}} ></Image>
            <View style = {{maxWidth: '90%', maxHeight: '15%', minHeight: '15%', marginTop: '5%', alignSelf: 'center',}}>
              <Text style = {styles.suggestionText} >{name}</Text>
              <Text style = {styles.suggestionText} >Google Rating: {rating}</Text>
              <Text style = {styles.suggestionText} >Price range: {range}</Text>
              <Text style = {styles.suggestionText} >Filter: {rejectArray[0]}</Text>
            </View>
        </View>
        <View style = {{maxWidth: '90%', maxHeight: '15%', minHeight: '15%', alignSelf: 'center',}}>
          <Text style = {styles.subtypeText} >{subType}</Text>
        </View>
        <View style ={{flexDirection: "row" , marginTop: '3%', justifyContent: 'space-evenly'}}>
          <Pressable style = {{backgroundColor: '#eb4034', padding: 10, borderRadius: 20, marginBottom: '5%'}} onPress={() => navigation.navigate('MoreInfo')}>
            <Image style = {{ marginBottom: '1%', marginTop: '1%', height: 50, width: 150, resizeMode: "contain" }} source ={require('./images/UI/More_Info.png')}/>
          </Pressable>
          <Pressable style = {{backgroundColor: '#eb4034', padding: 10, borderRadius: 20, marginBottom: '5%'}} onPress={changeSuggestion}>
            <Image style = {{ marginBottom: '1%', marginTop: '1%', height: 50, width: 150, resizeMode: "contain" }} source ={require('./images/UI/Ask_Aagin.png')}/>
          </Pressable>
        </View>
        <Pressable style = {styles.preferenceButton} onPress={() => navigation.navigate('Preferences') }>
          <Text style = {styles.buttonText}>
            Change My Filters
          </Text>
        </Pressable >
      </View>
    );
  }

  function MoreInfo({ navigation }: { navigation:any}) {
    const [phone, changePhone] = useState( dataJSON.at(suggestNum)?.phone );
    const [address, changeAddress] = useState( dataJSON.at(suggestNum)?.full_address );
    const [site, changeSite] = useState( ""+dataJSON.at(suggestNum)?.site );
    const [hours, changeHours] = useState( ""+dataJSON.at(suggestNum)?.working_hours );
    const [about, changeAbout] = useState( ""+dataJSON.at(suggestNum)?.about );

    //Show hours
    var dayList:string[] = hours?.split(",")
    var days = "", daysHours = ""

    for (var i = 0; i < dayList.length; i++) {
      var temp = dayList[i].split(":")
      days = days+temp[0].replaceAll("\"","").replaceAll("{","").trim()+":\n"
      daysHours = daysHours+temp[1].replaceAll("\"","").replaceAll("}","").trim()+"\n"
    }

    //Show about (WIP)
    var aboutList:string[] = about.split("}")
    var aboutAttri:string[] = [], otherSide:string[] = []
    var aboutInfo:string[] = []

    for (var i = 0; i < aboutList.length; i++) {
      aboutAttri[i] = ""+aboutList[i].split(": {")[0].replaceAll("{","").replaceAll("\"","").replaceAll(",","").trim()+":\n"
      otherSide[i] = ""+aboutList[i].split(": {")[1]
      aboutInfo[i] = ""
    }

    for (var i = 0; i < otherSide.length; i++) {
      var temp = otherSide[i].split(",")
        for (var j = 0; j < temp.length; j++) {
          aboutInfo[i] = aboutInfo[i]+"\t\t"+temp[j].replaceAll("\"","").replaceAll("{","").trim()+"\n"
        }
      aboutInfo[i]+="\n"
    }

    var aboutString = ""
    for (var i = 0; i < aboutAttri.length-2; i++) {
      aboutString = aboutString+aboutAttri[i]+aboutInfo[i]
    }
    //aboutString = aboutString.substring(0, aboutString.length-3)

    /* THIS CRASHES THE APP FOR SOME REASON, DO NOT USE RIGHT NOW
    function openURL() {
      return (
        Linking.openURL(site)
      )
    }
    
    This is from inside the return
    <Pressable onPress={() => openURL()}>
      <Text style = {styles.infoText}>click me!</Text>
    </Pressable>*/

    return (
      <View style={{ alignItems: 'center', padding: 5}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 10, alignItems: 'center'}}>
            <Text style = {styles.menuText} >Day:</Text>
            <Text style = {styles.infoText} >{days}</Text>
          </View>
          <View style={{marginLeft: 10, alignItems: 'center'}}> 
            <Text style = {styles.menuText} >Hours:</Text>
            <Text style = {styles.infoText} >{daysHours}</Text>
          </View>
        </View>
        <Text style = {styles.infoText} >Phone: {phone}</Text>
        <Text style = {styles.menuText} >Website:</Text>
        <View style={styles.extraInfoView}>
          <Text style = {styles.infoText} >{site}</Text>
        </View>
        <Text style = {styles.menuText} >Address:</Text>
        <View style={styles.extraInfoView}>
          <Text style = {styles.infoText} >{address}</Text>
        </View>
        <Text style={styles.menuText}>About:</Text>
        <ScrollView style={{maxHeight: '40%'}}>
          <Text style = {styles.infoText} >{aboutString}</Text>
        </ScrollView>
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
  preferenceButton:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '8%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#eb4034',
    marginBottom: '4%',
    //marginTop: '2%',
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
  },
  suggestionText:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtypeText:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  suggestionsButtonText:{
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  suggestionsButtonBackground:{
    backgroundColor: '#eb4034',
    padding: 10,
    borderRadius: 20,
    marginBottom: '5%'
  },
  prefView:{
    flexDirection: 'row',
    flex: 1,
    padding:5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  prefList:{
    maxWidth:'33%',
    marginBottom: '2%',
  },
  checkboxes:{
    marginBottom:12,
    flex: 1,
  },
  prefTextContainer:{
    maxWidth: '65%',
  },
  prefTextStyle:{
    textDecorationLine: "none", 
    fontWeight: 'bold',
  },
  menuText: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  infoText: {
    marginBottom: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  extraInfoView: {
    maxHeight: 60,
    minHeight: 60,
  }
})

  export { Landing, ManageProfiles, CreateProfiles, DeleteProfiles,
     Preferences, Profile, Options, Suggestions, MoreInfo, Accepted };
