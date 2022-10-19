import React,{useState} from "react";
import { View } from "react-native";
import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Searchbar } from 'react-native-paper';
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Login Screens
import HomeScreen from '../screens/login-screens/home-screen';
import SettingsScreen from '../screens/login-screens/settings-screen';

//Main Screens
import AccountScreen from "../screens/main-screens/account-screen";
import ListScreen from "../screens/main-screens/list-screen";
import CartScreen from "../screens/main-screens/cart-screen";
import ProductDescription from "../screens/main-screens/productDescription-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: 'white'
    },
};

const DrawerRoutes = () =>{
    const [search, setSearch] = useState('');
    const masterproduct = useSelector((state) => state.masterproductlist[0]);
    const cartlist = useSelector((state) => state.cartlist);

    const dispatch = useDispatch();
    const {initProduct,clearProduct} = bindActionCreators(actionCreators, dispatch);

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = masterproduct.filter(
            function (item) {
              const itemData = item.title
                ? item.title.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          clearProduct();
          initProduct(newData);
          setSearch(text);
        } else {
          clearProduct();
          initProduct(masterproduct);
          setSearch(text);
        }
      };

    return(
        <Tab.Navigator initialRouteName="ListScreen" screenOptions={{ tabBarActiveTintColor: '#EC650A',tabBarLabelStyle:{padding:0,marginBottom:6},tabBarStyle:{borderTopWidth:0,backgroundColor:"#fcfdff"} }}>
            <Tab.Screen
                name="ListScreen"
                component={ListScreen}
                options={{
                tabBarLabel: 'Home',
                header:()=>(
                <View style={{alignItems:'center',padding:5,backgroundColor:'#1194f6'}}>
                    <Searchbar 
                    value={search}
                    style={{marginTop:30,width:"90%",height:40,marginBottom:5}}
                    onChangeText={(text) => searchFilterFunction(text)}
                    placeholder="Search Items"
                    />
                </View>),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                )
                }}
            />
            <Tab.Screen 
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarBadge: cartlist.length,
                    headerTitle:'Cart',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#1194f6'},
                    headerTintColor:'white',
                    tabBarBadgeStyle:{backgroundColor:'#EC650A',color:'#fff'},
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="cart" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'Account',
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const All = () => {
    return (
        <View style={{flex:1}}>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="MainScreen"
                        component={DrawerRoutes}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="SettingsScreen"
                        component={SettingsScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen 
                        name="ProductDescription"
                        component={ProductDescription}
                        options={{
                            headerStyle: { backgroundColor: '#1194f6'},
                            headerTintColor:'white',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default All;

