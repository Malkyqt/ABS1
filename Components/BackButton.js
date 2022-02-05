/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 800,
  },
  header: {
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#ffffff',
    borderColor: "#004e8c",
    borderWidth: 1,
    borderRadius: 50,
    width: 140,
    height: 65,
    marginBottom: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonText:{
    fontSize: 20,
    color: '#004e8c',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  backButton:{
    marginTop: 'auto',
    marginBottom: 'auto',
    width: 50,
    height: 50,
  },
  backButtonContainer: {
    position: 'absolute',
    height: 150,
  },
  inputBox:{
    width: "80%",
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 55,
    margin: 12,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: "#004e8c",
    borderWidth: 1,
    borderRadius: 50,
  },
  errorText:{
    color: "#ff0000",
    alignSelf: 'center',
  }, 
  dialogContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});


const BackButton = ({selectedContent, setSelectedContent, setLogoutDialogVisible}): Node =>{
  return(
    <TouchableOpacity
      style={styles.backButtonContainer}
      onPress={()=>{
        if(selectedContent === "MainPage"){
          setLogoutDialogVisible(true);
        }else{
          setSelectedContent("IndexPage");
        }
      }}
    >
      <Image 
        style={styles.backButton}
        source={require('./images/backButton.png')} 
      />
    </TouchableOpacity>
  );

};

export default BackButton;