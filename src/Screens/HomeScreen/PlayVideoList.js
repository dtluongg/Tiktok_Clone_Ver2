import React, { useState , useRef, useEffect} from "react";
import { View, Text, Dimensions } from "react-native";
import { Video, ResizeMode } from "expo-av";
import styles from "./style";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs"

const PlayVideoListItem = ({video}) => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState({});
    useEffect(() => {
        console.log("My video URL: ", video?.videoUrl);
    }, [video?.videoUrl]); // Chỉ log khi videoUrl thay đổi.


    const BottomTabHeight = useBottomTabBarHeight();
    const screenHight =  Dimensions.get('window').height;
    return (
        <View>
            <Video
                ref={videoRef}
                style={{ alignSelf: 'center', width: Dimensions.get('window').width, height: screenHight}}
                source={{
                    uri: video?.videoUrl,
                }}
                shouldPlay
                useNativeControls = {false}
                resizeMode={ResizeMode.COVER}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
        </View>
    );
};

export default PlayVideoListItem;
