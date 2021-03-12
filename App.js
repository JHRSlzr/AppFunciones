import React, {useState} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button, TextInput} from "react-native";

import colors from './src/utils/colors';

export default function App(){
  const [Operation1,setOperation1] = useState('');
  const [Operation2,setOperation2] = useState('0, ');
  const [Operation3,setOperation3] = useState('');
  const [txtOperation,settxtOperation] = useState('');
  const [num1,setNum1] = useState(2);
  const [numfba,setNumfba] = useState(0);
  const [numfbb,setNumfbb] = useState(1);
  const [numfact,setNumfact] = useState(1);
  const [numaux,setNumaux] = useState(1);

  
  const doOperation = (op)=>{
switch (op){
  case 1: 
  setNum1(parseInt(num1)+2);
  setOperation1(Operation1+num1+', ');
  settxtOperation(Operation1);
  break;
  case 2: 
  setNumfbb(parseInt(numfbb)+parseInt(numfba));
  setNumfba(parseInt(numfbb));
  setOperation2(Operation2+numfbb+', ');
  settxtOperation(Operation2);
  break;
  case 3: 
  setNumfact(parseInt(numfact)*(parseInt(numaux)+1));
  setOperation3(Operation3+numfact+', ');
  setNumaux(parseInt(numaux)+1)
  settxtOperation(Operation3);
  break;
  default:
    break;
}

  }
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>EXAMEN_EL EQUIPO DINAMITA</Text>
      </SafeAreaView>
      <Text style = {styles.txt}>OPERACIÓN: </Text>
        <TextInput style = {styles.input}  >{txtOperation}</TextInput>
      <View style = {styles.btn}  >
        <Button title="FUNCIÓN 1" onPress={() =>doOperation(1)}/>
      </View>
      <View style = {styles.btn}  >
        <Button title="FUNCIÓN 2" onPress={() =>doOperation(2)}/>
      </View>
      <View style = {styles.btn}  >
        <Button title="FUNCIÓN 3" onPress={() =>doOperation(3)}/>
      </View>

    </>

  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:50,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  titleApp:{
    fontSize:20,
    fontWeight:"bold",
    color: '#FFFFFF',
    marginTop:15,
    marginBottom:280
  },
  input:{
    height:50,
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius:5,
    width: "100%",
    marginBottom:100,
    paddingHorizontal:20,
    color: "#000"
},
  btn: {
    marginBottom:15,
  },
  txt: {
    marginTop:60,
    alignSelf: "center"
  }

})