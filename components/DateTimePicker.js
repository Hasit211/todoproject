import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment'

export default function DateTimePicker() {
  constructor(); {
    super()
    this.state = {
        isVisible:false,
        chosenDate:''
    }
}
handlePicker=(datetime)=>{
    this.setState({
        isVisible:false,
        chosenDate:moment(datetime).format('MMMM,Do YYYY HH:mm')
    })
}
hidePicker=()=>{
    this.setState({
        isVisible:false
    })
}
showPicker=()=>{
    this.setState({
        isVisible:true
    })      
}
return (
<View style={styles.container}>
    <Text style={{color:'red',fontSize:20}} >
        {this.state.chosenDate}
    </Text>
    <TouchableOpacity style={styles.button} onPress={this.showPicker} >
        <Text style={styles.text} >showDateTimePicker</Text>
    </TouchableOpacity>
    <DateTimePicker
    isVisible={this.state.isVisible}
    onConfirm={this.handlePicker}
    onCancel={this._hidePicker}
    mode={'datetime'}
    is24Hour={false}
    />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingTop: Constants.statusBarHeight,
backgroundColor: '#ecf0f1',
padding: 8,
},
button:{
width : 250,
height:50,
backgroundColor:"black",
borderRadius:30,
justifyContent:"center",
marginTop:15
},
text:{
fontSize:18,
color:"white",
textAlign:"center"
}
});
