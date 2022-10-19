import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Button, Text,FlatList } from "react-native";
import { GetProductList } from "../../services/main-services/get-products";
import ProductItem from "./main-components/ProductItemComponent";

import { useSelector} from "react-redux";

const ListScreen = () =>{
    const navigation = useNavigation();
    
    const products = useSelector((state) => state.productlist[0]);
    
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={products}
                renderItem={({ item }) => (<ProductItem productItem={item} />)}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
          />
        </View>
    )
}

export default ListScreen;