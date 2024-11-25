import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

//donwload import
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ClerkProvider, SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";

//import screen
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";

//import create:
import fonts from "./src/fonts/fonts";

// const:

export default function App() {
    // Font:
    const [loaded, error] = useFonts(fonts);
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);
    if (!loaded && !error) {
        return null;
    }


    // Sign in:
    const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
    if (!publishableKey) {
        throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
    }

    return (
        <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <SignedIn>
                <HomeScreen />
            </SignedIn>
            <SignedOut>
                <LoginScreen />
            </SignedOut>
        </ClerkProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
