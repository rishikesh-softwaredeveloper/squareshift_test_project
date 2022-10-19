import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text,TouchableOpacity,StyleSheet,Image } from "react-native";
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'

const ProductDescription =({ route })=>{
  const { productItem } = route.params;
  const navigation = useNavigation();
    
  const back =()=>{
    navigation.goBack();
    return true;
  }
    return(
        <View style={{ flex: 1,padding:10 }}>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold',color:'Blue'}}>{productItem['productItem']['title']}</Text>
            </View>
            <View>
                <Image style={{resizeMode:'contain',height:100,width:'100%',marginBottom:10}}
                    source={{uri:productItem['productItem']['image']}}
                />
            </View>
            <View style={{justifyContent:'center',padding:20}}>
                <Text style={{fontSize:20,fontWeight:'800',marginBottom:20}}>{productItem['productItem']['description']}</Text>
                <Text style={{fontSize:20,marginBottom:20}}>Category : {productItem['productItem']['category']}</Text>
                <Text style={{fontSize:20,marginBottom:20}}>Price : &#36;{productItem['productItem']['price']}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginHorizontal: 25, 
      backgroundColor: '#F59E56', 
      borderColor: '#F59E56', 
      borderRadius: 5, 
      marginBottom: 20, 
      textAlign: 'center', 
      borderWidth: 0,
      padding:2,
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
      height: 1,
      width: 1
      }, 
      height: 40
    }
  });

export default ProductDescription;