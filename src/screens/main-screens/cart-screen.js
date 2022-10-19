import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Button, Text,FlatList } from "react-native";
import CartItem from "./main-components/CartItemComponent";

import { useSelector} from "react-redux";

const CartScreen = () =>{
    const navigation = useNavigation();
    const cartlist = useSelector((state) => state.cartlist);

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={cartlist}
                renderItem={({ item }) => (<CartItem cartItem={item} />)}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

export default CartScreen;