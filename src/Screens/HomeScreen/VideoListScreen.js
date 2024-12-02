import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import PlayVideoListItem from "./PlayVideoList";
import Ionicons from '@expo/vector-icons/Ionicons';

const VideoListScreen = ({navigation}) => {
    const params = useRoute().params;
    const [videoList, setVideoList] = useState([]);
    useEffect(()=>{
        setVideoList([params.selectedVideo])
    },[])
    console.log("My video in Video List Screen: ", params);
    return(
        <View>
            <TouchableOpacity style={{position: 'absolute', zIndex: 10, padding: 20, paddingTop: 50}} onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={30} color="black" />
            </TouchableOpacity>
            <FlatList 
                data={videoList}
                renderItem={({item, index})=>(
                    <PlayVideoListItem video={item}/>
                )}
            />
        </View>
    )
}

export default VideoListScreen;