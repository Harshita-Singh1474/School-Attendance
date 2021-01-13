import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Button} from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View>
        <Text  style={styles.header}>School Attendance</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  header:{
    textAlign:"center",
    fontSize:45,
    backgroundColor:"yellow",
    color:"green",
    padding:20,
    fontFamily:'Comic Sans MS'
  }
})

export default AppHeader;