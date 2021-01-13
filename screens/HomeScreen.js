import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Button} from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentPressed: [],
      absentPressed: [],
    };
  }

  goToSummaryScreen = () => {
    this.props.navigation.navigate('SummaryScreen')
  }

  componentDidMount = async() => {
    var class_ref =await db.ref('/').on('value', data => {
      var all_students =  []
      var class_a = data.val();
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
      this.setState({ all_students: all_students });
    });
  };

  updateAttendance(roll_no, status) {
    var id = '';
    if (roll_no <= 9){
      id='0' + roll_no;
    } else {
      id = roll_no
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if(dd < 10) {
      dd = '0' + dd;
    }
    if(mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy ;
    var ref_path = id;
    var class_ref = db.ref(ref_path);
    class_ref.update({
      [today]:status
    })
  }
  

  render(){
  
    return(
      <View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
          <Text style={styles.students}>Student</Text>
          <TouchableOpacity style={styles.present}><Text style={styles.text}>Present</Text></TouchableOpacity>
          <TouchableOpacity style={styles.absent}><Text style={styles.text}>Absent</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.summary} onPress={() => {
            this.goToSummaryScreen();
          }}><Text style={styles.summaryText}>Summary</Text></TouchableOpacity>
      </View>
      )
  }
}

const styles=StyleSheet.create({
  students:{
    fontSize:25,
    marginLeft:5,
    margin:20
  },
  present:{
    backgroundColor:"green",
    height:35,
    width:90,
    borderWidth:4,
    borderRadius:10,
    marginTop:20
  },
  text:{
    fontSize:20,
    textAlign:"center"
  },
  absent:{
    backgroundColor:"red",
    height:35,
    width:90,
    borderWidth:4,
    borderRadius:10,
    marginTop:20,
    marginLeft:20
  },
  summary:{
    backgroundColor:"purple",
    alignSelf:"center",
    padding:10,
    width:200,
    alignItems:"center",
    borderWidth:5,
    borderRadius:10
  },
  summaryText:{
    color:"white",
    fontSize:20
  }
})

