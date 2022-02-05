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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Linking,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Logo from "./images//logo.svg";
//import AsyncStorage from '@react-native-community/async-storage@1.12.1';
import Dialog from "react-native-dialog";
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 800,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#ffffff',
    borderColor: "#004e8c",
    borderWidth: 1,
    borderRadius: 50,
    width: 140,
    height: 65,
    marginBottom: 20,
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
    fontFamily: 'Lato-Black',
  },
  inputBox:{
    width: "80%",
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 55,
    margin: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: "#004e8c",
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Lato-Black',
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
  mainPageButton: {
      width: 210,
      height: 45,
      backgroundColor: '#ffc222',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
  },
  mainPageCallButton: {
      width: 210,
      height: 45,
      backgroundColor: '#198717',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,  
  },
});


const IndexPage = ({setSelectedContent}): Node => {
  return (
      <View style={styles.container}>
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                  setSelectedContent("LoginPage");
              }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setSelectedContent("RegisterPage");
              }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
    </View>
  );
};


const RegisterPageNames = ({setCurrentStep, setProfileObject, setSelectedContent}): Node => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameErr, setFirstNameErr] = useState(false);
    const [lastNameErr, setLastNameErr] = useState(false);

    return(
        <>
          <TextInput
              style={styles.inputBox}
              maxLength={20}
              onChangeText={(text)=>{
                setFirstName(text.replace(/[^a-zA-Z ]/g, ''));
              }}
              value={firstName}
              placeholder="First Name"
              placeholderTextColor="#004e8c" 
              color="#004e8c" 
              fontSize={20}
              padding={15}
          />
          <Text style={styles.errorText}>{firstNameErr ? "Please Enter First Name" : ""}</Text>
          <TextInput
              style={styles.inputBox}
              maxLength={20}
              onChangeText={(text)=>{
                setLastName(text.replace(/[^a-zA-Z ]/g, ''));
              }}
              value={lastName}
              placeholder="Last Name"
              placeholderTextColor="#004e8c" 
              color="#004e8c" 
              fontSize={20}
              padding={15}
          />
          <Text style={styles.errorText}>{lastNameErr ? "Please Enter Last Name" : ""}</Text>
        

        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 15,
          }}>
              <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => {
                    setSelectedContent("IndexPage");
                  }}
              >
                  <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => {
                    if(firstName === "" || lastName === ""){
                        if(firstName === ""){setFirstNameErr(true);}else{setFirstNameErr(false);}
                        if(lastName === ""){setLastNameErr(true);}else{setLastNameErr(false);}
                    }else{
                      setProfileObject(curr =>{
                          var newObj = {...curr};
                          newObj.firstName = firstName;
                          newObj.lastName = lastName;
                          return newObj;
                      });
                      setCurrentStep(curr => curr + 1);
                    }
                  }}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
          </View>
        </>
    );
};

const RegisterPageData = ({setCurrentStep, setProfileObject, setSelectedContent}): Node => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneNumberErr, setPhoneNumberErr] = useState(false);

  return(
      <>
        <TextInput
            style={styles.inputBox}
            maxLength={30}
            onChangeText={(text)=>{
              setEmail(text.replace(/[^a-zA-Z @._][^-]/g, ''));
            }}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor="#004e8c" 
            color="#004e8c" 
            fontSize={20}
            padding={15}
        />
        <Text style={styles.errorText}>{emailErr ? emailErr : ""}</Text>

        <TextInput
            style={styles.inputBox}
            maxLength={12}
            onChangeText={(text)=>{
              setPhoneNumber(text.replace(/[^0-9]/g, ''));
            }}
            value={phoneNumber}
            keyboardType="numeric"
            placeholder="Phone Number"
            placeholderTextColor="#004e8c" 
            color="#004e8c" 
            fontSize={20}
            padding={15}
        />
        <Text style={styles.errorText}>{phoneNumberErr ? "Please Enter Phone Number" : ""}</Text>


        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 15,
        }}>
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  setSelectedContent("IndexPage");
                }}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  if(email === "" || phoneNumber === ""){
                      if(email === ""){setEmailErr("Please set email");}else{setEmailErr("");}
                      if(phoneNumber === "" || phoneNumber.length < 10){ setPhoneNumberErr(true);}else{setPhoneNumberErr(false);}
                  }else{
                    fetch('https://abs1.fi/app/getAccount.php', {
                      method: 'POST',
                      body: JSON.stringify({
                        email: email,
                      }),
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                    })
                    .then(res => {
                      return res.json();
                    })
                    .then(data => {
                      console.log(data);
                      if(data.accountExists){
                          /// THERE IS SUCH A USER
                          if(email === ""){setEmailErr("Email is already in use");}else{setEmailErr("");}
                      }else{
                        setProfileObject(curr =>{
                            var newObj = {...curr};
                            newObj.email = email;
                            newObj.phoneNumber = phoneNumber;
                            return newObj;
                        });
                        setCurrentStep(curr => curr + 1);
                      }
                    }).catch(err => console.log(err));
                  }
                }}
              >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
      </>
  );
};

const RegisterPageCredentials = ({setCurrentStep, setProfileObject, setSelectedContent}): Node => {
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [termsAndConditionsDialog, setTermsAndConditionsDialog] = useState(false);

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

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 15,
        }}>
          <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                setSelectedContent("IndexPage");
              }}
          >
              <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button]}
            onPress={() => {
              if(password === "" ||  (confirmPassword !== password)){
                if(password === ""){setPasswordErr(true);}else{setPasswordErr(false);}
                if(confirmPassword === "" || confirmPassword !== password){setConfirmPasswordErr(true);}else{setConfirmPasswordErr(false);} 
              }else{
                if(termsAndConditions){
                  setProfileObject(curr =>{
                      var newObj = {...curr};
                      newObj.password = password;
                      return newObj;
                  });
                  console.log("last step");

                  setCurrentStep(curr => {
                    console.log(curr);
                    return curr + 1;
                  });
                }
              }
            }}
          >
              <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        </View>


        <Dialog.Container visible={termsAndConditionsDialog} style={styles.dialogContainer}>
              <ScrollView>
                      <Dialog.Title style={{alignSelf: 'center'}}>TERMS AND CONDITIONS</Dialog.Title>
                      <Dialog.Description style={{fontSize: 18}}>
                      By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site. PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                      </Dialog.Description>
                      <Dialog.Button label="Close" onPress={()=>{setTermsAndConditionsDialog(false);}}/>
                </ScrollView>
            </Dialog.Container>
      </>
  );
};


const RegisterPage = ({setSelectedContent, setProfile}): Node => {

  const [profileObject, setProfileObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    userNumber: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const [stepper, setStepper] = useState([
      <RegisterPageNames
          setCurrentStep={setCurrentStep}
          setProfileObject={setProfileObject}
          setSelectedContent={setSelectedContent}
      />,
      <RegisterPageData
          setCurrentStep={setCurrentStep}
          setProfileObject={setProfileObject}
          setSelectedContent={setSelectedContent}
      />,
      <RegisterPageCredentials
          setCurrentStep={setCurrentStep}
          setProfileObject={setProfileObject}
          setSelectedContent={setSelectedContent}
      />,
  ]);
 
  useEffect(()=>{
    /*
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(profileObject);
        await AsyncStorage.setItem('@myAccount', jsonValue);
      } catch (e) {
        console.log("couldn't save");
      }
    };
    */
  },[profileObject]);

  return(
    <View style={styles.container}>
          {currentStep < stepper.length ? 
          (
            <>
            {stepper[currentStep]}
          </>
          )
          : 
          (
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => {
                  console.log("FETCH CREATE ACCOUNT");
                  fetch('https://abs1.fi/app/getAccounts.php', {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                  })
                  .then(allAccountsData => allAccountsData.json())
                  .then(allAccountsResponse =>{
                      const newUserNumber =  Math.floor(Math.random() * 9999);
                      if(allAccountsResponse.filter((val) => val.userNumber === newUserNumber).length === 0){
                          fetch('https://abs1.fi/app/createAccount.php', {
                            method: 'POST',
                            body: JSON.stringify({
                              firstName: profileObject.firstName,
                              lastName: profileObject.lastName,
                              email: profileObject.email,
                              password: profileObject.password,
                              phoneNumber: profileObject.phoneNumber,
                              userNumber: newUserNumber,
                            }),
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                            },
                          })
                          .then(createAccountRes => createAccountRes.json())
                          .then(createAccountData => {
                              setProfile({
                                firstName: profileObject.firstName,
                                lastName: profileObject.lastName,
                                email: profileObject.email,
                                password: profileObject.password,
                                phoneNumber: profileObject.phoneNumber,
                                userNumber: newUserNumber,
                              });
                              setSelectedContent("MainPage");
                          })
                          .catch(error => console.error(error));
                      }
                  })
                  .catch(err => console.log(err));
                }}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
    </View>
  );
};

const LoginPage = ({setSelectedContent, setProfile}): Node => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  return(
      <View style={styles.container}>
        <>
        <TextInput
            style={styles.inputBox}
            maxLength={30}
            onChangeText={(text)=>{
              setEmail(text.replace(/[^a-zA-Z @._][^-]/g, ''));
            }}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor="#004e8c" 
            color="#004e8c" 
            fontSize={20}
            padding={15}
        />
          <Text style={styles.errorText}>{emailErr ? emailErr : ""}</Text>

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
          <Text style={styles.errorText}>{passwordErr ? passwordErr : ""}</Text>
        </>
 
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 15,
        }}>
              <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => {
                    setSelectedContent("IndexPage");
                  }}
              >
                  <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={[styles.button]}
                  onPress={() => {
                    if(email === "" || password === ""){
                        if(email === ""){setEmailErr("Please Enter your Email");}
                        if(password === ""){setPasswordErr("Please Enter your Password");}
                    }else{
                        fetch('https://abs1.fi/app/getAccount.php', {
                          method: 'POST',
                          body: JSON.stringify({
                            email: email,
                            password: password,
                          }),
                          headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                          },
                        })
                        .then(res => {
                          return res.json();
                        })
                        .then(data => {
                          console.log(data);
                          if(data.accountExists){
                              /// THERE IS SUCH A USER
                              setProfile({
                                email: data.email,
                                firstName: data.first_name,
                                lastName: data.last_name,
                                phoneNumber: data.phone_number,
                                userNumber: ((data.id + '').length === 2) ? "20" : "2" + data.id,
                              });
                              setSelectedContent("MainPage");
                          }else{
                              /// NO SUCH USER
                              if(passwordErr === ""){setPasswordErr("Wrong Account Name or Password");}
                          }
                        })
                        .catch(error => console.error(error));
                      }}
                    }
              >
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
        </View>
    </View>
  );
};


const MainPage = ({setSelectedContent, profile, setInfoDialogVisible, selectedContent, setLogoutDialogVisible}): Node => {
  return (
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
           <Text style={{
              color: "#000000",
              fontSize: 32,
              fontWeight: '500',
              textTransform: 'capitalize',
              fontFamily: 'Catamaran-VariableFont_wght',
            }}>
              {profile.firstName}
          </Text>
          <Text style={{
              color: "#000000",
              fontSize: 32,
              marginLeft: 10,
              fontWeight: '500',
              textTransform: 'capitalize',
              fontFamily: 'Catamaran-VariableFont_wght',
            }}>
              {profile.lastName}
          </Text>
        </View>
         
          <Text style={{
            color: "#000000",
            fontSize: 54,
            alignSelf: 'center',
            fontWeight: '400',
          }}>
              {profile.userNumber}
          </Text>



          <View
            style={{
              marginTop: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
              <Text style={{
                color: "#000000",
                fontSize: 30,
                alignSelf: 'center',
                fontWeight: '500',
                fontFamily: 'Catamaran-VariableFont_wght',
              }}>
                  {"Katso uusi painamalla"}
              </Text>     
          </View>
          
       
          <TouchableOpacity style={styles.mainPageButton}>
              <Text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'Lato-Black',
                    color: "#000000",
                  }}
              >{"MORE INFO ->"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPageButton}>
              <Text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'Lato-Black',
                    color: "#000000",
                  }}
              >{"MORE INFO ->"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainPageButton}>
              <Text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'Lato-Black',
                    color: "#000000",
                  }}
              >{"MORE INFO ->"}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={styles.mainPageCallButton}
              onPress={()=>{
                Linking.openURL(`tel:03-5851111`);
              }}
          >
              <Text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    fontSize: 18,
                    textAlign: 'center',
                    fontFamily: 'Lato-Black',
                    color: '#ffffff',
                  }}
              >{"MORE INFO ->"}</Text>
          </TouchableOpacity>
          
          <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
          >
            <TouchableOpacity
                style={{
                  width: '50%',
                  padding: 10,
                }}
                onPress={()=>{
                  setLogoutDialogVisible(true);
                }}
            >
                <Image 
                  source={require("./images/back.png")} 
                  style={{
                    width: 38,
                    height: 38,
                  }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                  width: '50%', 
                  alignContent: 'flex-end',    
                  padding: 10,
                }}
                onPress={()=>{
                  setInfoDialogVisible(true);
                }}
            >
              <View style={{marginLeft: 'auto'}}>
              <Image 
                  source={require("./images/info.png")} 
                  style={{
                    width: 38,
                    height: 38,
                  }}
                />
              </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};



const App: () => Node = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [profile, setProfile] = useState({});
  const [selectedContent, setSelectedContent] = useState("IndexPage");
  const [infoDialogVisible, setInfoDialogVisible] = useState(false);
  const [deleteAccountVisible, setDeleteAccountVisible] = useState(false);
  const [logoutDialogVisible, setLogoutDialogVisible] = useState(false);
  const [contentObject, setContentObject] = useState({
    IndexPage: <IndexPage
      setSelectedContent={setSelectedContent}
    />,
    LoginPage: <LoginPage
      setSelectedContent={setSelectedContent}
      setProfile={setProfile}
    />,
    RegisterPage: <RegisterPage
      setSelectedContent={setSelectedContent}
      setProfile={setProfile}
    />,
    MainPage: <MainPage
        profile={profile}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
        setInfoDialogVisible={setInfoDialogVisible}
        setDeleteAccountVisible={setDeleteAccountVisible}
        setLogoutDialogVisible={setLogoutDialogVisible}
    />,
  });


  useEffect(()=>{
    setContentObject((c)=>{
      const newObject = {...c};
      newObject.MainPage = <MainPage
          profile={profile}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
          setInfoDialogVisible={setInfoDialogVisible}
          setDeleteAccountVisible={setDeleteAccountVisible}
          setLogoutDialogVisible={setLogoutDialogVisible}
      />;
      return newObject;
    });
  }, [profile]);

  useEffect(()=>{
    /*const getData = async () => {
      try {
        const jsonData = await AsyncStorage.getItem('@myAccount');
        const jsonResponse = jsonData != null ? JSON.parse(jsonData) : null;
        if(jsonResponse != null){
          setProfile(jsonResponse);
          setSelectedContent("MainPage");
          return jsonResponse;
        }
      } catch(e) {
        // error reading value
      }
    };*/
  },[]);



  return (
    <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.container}>
            {selectedContent === "RegisterPage" ? 
            (
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                  <ImageBackground source={require("./images/background.png")} resizeMode="cover" style={styles.image}>
                      <View style={styles.header}>
                          <Logo 
                            style={{
                              marginLeft: 'auto',
                              marginRight: 'auto',
                            }}
                          />
                      </View>
                      {contentObject[selectedContent]}
                  </ImageBackground>
              </ScrollView>
            )
            : 
            (
              <View>
                <ImageBackground source={require("./images/background.png")} resizeMode="cover" style={styles.image}>
                    <View style={styles.header}>
                        <Logo 
                          style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        />
                    </View>
                    {contentObject[selectedContent]}
                </ImageBackground>
              </View>
            )}
        </View>

          <Dialog.Container visible={infoDialogVisible} style={styles.dialogContainer}>
              <ScrollView>
                  <Dialog.Title style={{alignSelf: 'center'}}>Abs1.fi</Dialog.Title>
                  <Dialog.Description style={{fontSize: 18}}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Dialog.Description>
                  <Dialog.Button label="Delete Account" style={{fontSize: 18}} onPress={()=>{setInfoDialogVisible(false); setDeleteAccountVisible(true);}}/>
                  <Dialog.Button label="Close" style={{fontSize: 18}} onPress={()=>{setInfoDialogVisible(false);}}/>
                </ScrollView>
          </Dialog.Container>

            <Dialog.Container visible={logoutDialogVisible} style={styles.dialogContainer}>
              <ScrollView>

                    <Dialog.Description style={{fontSize: 18}}>
                        Are you sure you want to Logout?
                    </Dialog.Description>
                    <Dialog.Button label="No" style={{fontSize: 18}} onPress={()=>{setLogoutDialogVisible(false);}}/>
                    <Dialog.Button label="Yes" style={{fontSize: 18}} onPress={()=>{setLogoutDialogVisible(false); setSelectedContent("IndexPage");}}/>
                </ScrollView>
            </Dialog.Container>





            <Dialog.Container visible={deleteAccountVisible} style={styles.dialogContainer}>
                <ScrollView>
                    <Dialog.Title>Delete Account</Dialog.Title>
                    <Dialog.Description style={{fontSize: 18}}>
                      Do you want to delete this account? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Close" onPress={()=>{setDeleteAccountVisible(false);}}/>
                    <Dialog.Button label="Delete" onPress={()=>{
                      setDeleteAccountVisible(false);
                      console.log(profile.email);
                      fetch("https://abs1.fi/app/deleteAccount.php", {
                        method: "POST",
                        body: JSON.stringify({
                          email: profile.email,
                        }),
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                      })
                      .then(res => res.json())
                      .then(data => {
                          setSelectedContent("IndexPage");
                      })
                      .catch(err => console.log(err));
                    }}/>
                </ScrollView>
            </Dialog.Container>
    </SafeAreaView>
  );
};

export default App;