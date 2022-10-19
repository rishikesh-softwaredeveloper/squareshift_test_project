import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Image } from "react-native-elements";
import { IconButton } from "react-native-paper";
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { GetProductList } from "../../../services/main-services/get-products";
import { actionCreators } from "../../../state";

const CartItem=(cartItem)=>{

    const dispatch = useDispatch();
    const {removeFromCart,initProduct,initMasterProduct,clearProduct,clearMasterProduct} = bindActionCreators(actionCreators, dispatch);

    const removeCart=(item)=>{
        removeFromCart(item.id)
        GetProductList().then((res)=>{
            clearProduct()
            clearMasterProduct()
            initProduct(res)
            initMasterProduct(res)
        })
    }

    for (var keys in cartItem) {
        return (
            <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:"30%",paddingTop:0,marginRight:0,marginLeft:0}}>
                            <Image style={{resizeMode:'contain',height:100,width:'100%',marginBottom:10}} 
                                source={{uri:cartItem[keys]['productItem'].image}}
                            />
                        </View>
                        
                        <View style={styles.sub_container}>
                            <View style={{flexDirection:'column',width:"50%"}}>
                                <View style={{textAlign:'center',marginBottom:5}}>
                                    <Text numberOfLines={2}  style={{color: "#000",fontWeight: '500', fontFamily: 'serif',fontSize:14,justifyContent:'center',alignItems:'center'}}>{cartItem[keys]['productItem'].title}</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{ fontWeight: '700',fontFamily:'serif', color: "#DD2A05",fontSize:20 }}>&#36;{(cartItem[keys]['productItem'].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/-   </Text>
                                </View>
                            </View>
                            <View style={{ width: "20%",flexDirection:'column',justifyContent:'space-between'}}>                          
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}>
                                <IconButton
                                    icon="delete-forever"
                                    size={30}
                                    color="red"
                                    onPress={() => removeCart(cartItem[keys]['productItem'])}
                                />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginVertical: 3, 
        marginHorizontal: 2, 
        borderRadius: 5,
        margin: 0,
        padding: 0,
        borderColor: "#CCC"
    },
    sub_container: {
        flexDirection: 'row',
        padding: 0,
        marginVertical: 0,
        justifyContent: 'space-evenly'
    }

});


export default CartItem;