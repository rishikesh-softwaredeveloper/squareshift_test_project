import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Button, Text } from "react-native";

const SettingsScreen = () =>{
    const navigation = useNavigation();

    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting Screen</Text>
            <Button 
                onPress={()=>navigation.navigate('HomeScreen')}
                title="SettingsScreen"
            />
        </View>
    )
}

export default SettingsScreen;