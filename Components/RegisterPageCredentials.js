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

const RegisterPageCredentials = ({setCurrentStep}): Node =>{
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  return(
      <>
          <TextInput
              style={styles.inputBox}
              maxLength={18}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#004e8c" 
              color="#004e8c" 
              fontSize={20}
              padding={15}
          />
          <Text style={styles.errorText}>{passwordErr ? "Please Enter Password" : ""}</Text>

          <TextInput
              style={styles.inputBox}
              maxLength={18}
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#004e8c" 
              color="#004e8c" 
              fontSize={20}
              padding={15}
          />
          <Text style={styles.errorText}>{confirmPasswordErr ? "Please Confirm Password" : ""}</Text>

          <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
              <CheckBox
                  value={termsAndConditions}
                  onValueChange={setTermsAndConditions}
                  style={{
                    marginTop: 18,
                  }}
              />
              <TouchableOpacity onPress={()=>{setTermsAndConditionsDialog(true);}}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#004e8c',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    marginBottom: 20,
                    marginTop: 20,
                  }}>Accept our Terms</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              if(password === "" ||  (confirmPassword !== password)){
                if(password === ""){setPasswordErr(true);}else{setPasswordErr(false);}
                if(confirmPassword === "" || confirmPassword !== password){setConfirmPasswordErr(true);}else{setConfirmPasswordErr(false);} 
              }else{
                if(termsAndConditions){
                  setCurrentStep(curr => curr + 1);
                }
              }
            }}
          >
          <Text style={styles.buttonText}>Confirm Names</Text>
        </TouchableOpacity>
      </>
  );
};

export default RegisterPageCredentials;