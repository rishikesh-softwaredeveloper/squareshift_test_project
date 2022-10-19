import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View, Text, Image } from "react-native";
import ElementButton from "../../components/button";
import TextInput from "../../components/text-input";
import * as FieldValidator from "../../helpers/fieldValidator";
import { PostLogin } from "../../services/login-services/post-login";

import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { GetProductList } from "../../services/main-services/get-products";


const HomeScreen = () =>{
    const navigation = useNavigation();

    const [userName, setUserName] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

    const dispatch = useDispatch();
    const {initProduct,clearProduct,initMasterProduct,clearMasterProduct} = bindActionCreators(actionCreators, dispatch);

    const loginPress = ()=>{
      const user_error = FieldValidator.userNameValidator(userName.value,"UserName")
      const password_error = FieldValidator.passwordValidator(password.value,"Password")

      try {
        if (password_error.length > 0 || user_error.length > 0) {
          setPassword({ ...password, error: password_error });
          setUserName({ ...userName, error: user_error });
          return false;
        } else {
          setPassword({ ...password, error: "" });
          setUserName({ ...userName, error: "" });
        }
      } catch (error) {}

      const logindata = {
        username: userName.value,
        password: password.value,
      };

      if (userName.error == "" || password.error == "") {
        PostLogin(logindata).then((response)=>{
          if(response){
            GetProductList().then((response)=>{
              if(response){
                clearProduct()
                clearMasterProduct()
                initMasterProduct(response)
                initProduct(response)
              }
            })
            navigation.navigate('MainScreen')
          }else if(response == undefined){
            alert("username or password is incorrect")
            navigation.navigate("HomeScreen");
          }
        })
      }
    }

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{resizeMode:'contain',height:100,width:'100%',marginBottom:10}}
              source={require('../../assets/login.jpg')}
            />
            <TextInput
            label="User Name"
            placeholder="User Name"
            style={styles.input}
            onChangeText={(text) => setUserName({ value: text, error: "" })}
            value={userName.value}
            error={!!userName.error}
            errorText={userName.error}
            inputContainerStyle={{ borderBottomWidth: 0 }}
          />
          <TextInput
            label="Password"
            placeholder="Password"
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            value={password.value}
            error={!!password.error}
            errorText={password.error}
            // secureTextEntry={true}
          />
          <ElementButton
            title="Submit"
            style={{
                backgroundColor: "#1194f6",
                borderRadius: 5,
            }}
            containerStyle={styles.buttonstyles}
            onPress={loginPress}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    contentView: {
      flex: 1,
    },
    buttonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    buttonstyles: {
      marginHorizontal: "10%",
      marginVertical: "3%",
      height: 50,
      width: "80%",
    },
    input: {
      marginHorizontal: 30,
      marginVertical: 10,
      height: 50,
      margin: 1,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      fontFamily: "serif",
    },
    imagestyles: {
      marginVertical: 10,
      height: 200,
      width: 200,
    },
  });

export default HomeScreen;