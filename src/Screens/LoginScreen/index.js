import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
// download
import { Video, ResizeMode } from "expo-av";
import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();
import { useWarmUpBrowser } from "../../Hooks/useWarmUpBrowser";
import { useOAuth, useAuth } from "@clerk/clerk-expo";
import supabase from "../../Hooks/supabaseConfig";
// create
import styles from "./style";

const LoginScreen = () => {
    // webBrowser:
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
//     const onPressAuth = React.useCallback(async () => {
//     try {
//         const { createdSessionId, signUp } = await startOAuthFlow();
//         if (createdSessionId) {
//             // Kích hoạt session
//             setActive({ session: createdSessionId });
//             console.log("Session set successfully:", createdSessionId);

//             // Nếu có thông tin từ signUp, lưu vào Supabase
//             if (signUp?.emailAddress) {
//                 const { data, error } = await supabase
//                     .from("Users")
//                     .insert([
//                         {
//                             name: signUp?.firstName,
//                             email: signUp?.emailAddress,
//                         },
//                     ])
//                     .select();

//                 if (error) {
//                     console.error("Supabase insert error:", error);
//                 } else {
//                     console.log("User data inserted:", data);
//                 }
//             }
//         } else {
//             console.log("OAuth flow did not return a session ID.");
//         }
//     } catch (err) {
//         console.error("OAuth error:", err);
//     }
// }, [setActive]);

const onPressAuth = React.useCallback(async () => {
    try {
        console.log("Starting OAuth flow...");
        const result = await startOAuthFlow();
        console.log("OAuth flow result:", result);

        if (result.createdSessionId) {
            console.log("Session created successfully:", result.createdSessionId);
        } else {
            console.log("OAuth flow did not return a session ID.");
        }
    } catch (err) {
        console.error("OAuth error:", err);
    }
}, []);

    return (
        <View style={styles.container}>
            <Video
                style={styles.video}
                // source={require("../../video/video-1.mp4")}
                source={{
                    // uri:'https://cdn.pixabay.com/video/2024/07/21/222274_large.mp4'
                    // uri: "https://cdn.pixabay.com/video/2017/06/28/10339-865412856_large.mp4",
                    uri: "https://cdn.pixabay.com/video/2020/05/26/40255-425288408_large.mp4",
                }}
                useNativeControls
                resizeMode={"cover"}
                onError={(e) => console.log(e)}
                isLooping
            />
            <View style={styles.content}>
                <Text style={styles.title}>My Tiktok App</Text>
                <Text style={styles.titleSub}>
                    Let start with Tiktok have been created by Developer Do Tien Luong
                </Text>
                <Text style={styles.titleSubmit}>Sign in with Google or Facebook</Text>
                <View style={styles.socialChoose}>
                    <TouchableOpacity style={styles.btnGoogle} onPress={onPressAuth}>
                        <Image style={styles.logoImage} source={require("../../logo/google.jpg")} />
                        <Text style={styles.textImage}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image
                            style={styles.logoImage}
                            source={require("../../logo/facebook.jpg")}
                        />
                        <Text style={styles.textImage}>Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
