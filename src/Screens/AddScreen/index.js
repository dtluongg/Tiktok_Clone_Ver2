import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import After_Add_View from "./Add_Screen";
import Before_Add_View from "./Add_Screen_Before";

const Stack = createStackNavigator();

const Add_Screen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="After_Add_Screen" component={After_Add_View} />
            <Stack.Screen name="Before_Add_Screen" component={Before_Add_View} />
        </Stack.Navigator>
    );
};

export default Add_Screen;
