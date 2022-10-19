import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Button, Text } from "react-native";

const AccountScreen = () =>{
    const navigation = useNavigation();

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{marginBottom:10}} >Account Screen</Text>
            <Button
                title="Logout"
                onPress={()=>navigation.navigate('HomeScreen')}
            />
        </View>
    )
}

export default AccountScreen;