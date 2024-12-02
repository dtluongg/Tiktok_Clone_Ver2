import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import VideoListScreen from "./VideoListScreen";

const Stack = createStackNavigator();

const Home_Screen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="VideoListScreen" component={VideoListScreen} />
        </Stack.Navigator>
    );
};

export default Home_Screen;
