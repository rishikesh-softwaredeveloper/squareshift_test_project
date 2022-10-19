import React,{useState} from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { Button, Image } from "react-native-elements";
import { IconButton } from "react-native-paper";

import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";


const ProductItem=(productItem)=>{
    const [flag,setflag] = useState(false);
    const cartlist = useSelector((state) => state.cartlist);

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const {initCart,clearCart,addToCart,removeFromCart} = bindActionCreators(actionCreators, dispatch);

    const addCart=(item)=>{
        setflag(true);
        addToCart(item)
    }

    const showDescription =(item)=>{
        navigation.navigate('ProductDescription',{"productItem":item})
    }
    for (var keys in productItem) {
        return (
            <View  style={{borderWidth: 0,marginVertical: 3, marginHorizontal: 0, borderRadius: 0,margin: 0,padding:10,borderColor: "#CCC",borderBottomWidth:1,borderBottomColor:'#bdbbb7'}}>
                <TouchableOpacity onPress={()=>showDescription(productItem)}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:"40%",paddingTop:0,marginRight:0,marginLeft:0}}>
                            <Image style={{resizeMode:'contain',height:100,width:'100%',marginBottom:10}} 
                            source={{uri:productItem[keys].image}}
                            />
                        </View>
                        
                        <View style={styles.sub_container}>
                            <View style={{flexDirection:'column',width:"60%"}}>
                                <View style={{textAlign:'center',marginBottom:5}}>
                                    <Text numberOfLines={2}  style={{color: "#000",fontWeight: '500', fontFamily: 'serif',fontSize:14,justifyContent:'center',alignItems:'center',marginBottom:10}}>{productItem[keys].title}</Text>
                                    <Text style={{ fontWeight: '700',fontFamily:'serif', color: "#DD2A05",fontSize:20,marginBottom:10 }}>&#36;{(productItem[keys].price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/-   </Text>
                                    <Button  
                                        title="Add to cart"
                                        icon={{
                                            name: 'cart-arrow-down',
                                            type: 'font-awesome',
                                            size: 15,
                                            color: 'white',
                                            }}
                                        iconLeft
                                        iconContainerStyle={{ marginRight: 10 }}
                                        loading={false}
                                        loadingProps={{ size: 'small', color: 'white' }}
                                        disabled={ productItem[keys].flag ? true : flag }
                                        buttonStyle={{
                                            backgroundColor: 'rgba(111, 202, 186, 1)',
                                            borderRadius: 5,
                                            width:'100%'
                                        }}
                                        titleStyle={{ fontWeight: '500', fontSize: 15 }}
                                        onPress={() => addCart(productItem)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
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

export default ProductItem;