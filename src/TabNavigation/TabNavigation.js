import {View, Text} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import AddScreen from "../Screens/AddScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function TabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = 'Home' component={HomeScreen}/>
            <Tab.Screen name = 'Search' component={SearchScreen}/>
            <Tab.Screen name = 'Add' component={AddScreen}/>
            <Tab.Screen name = 'Profile' component={ProfileScreen}/>
        </Tab.Navigator>
    )
}