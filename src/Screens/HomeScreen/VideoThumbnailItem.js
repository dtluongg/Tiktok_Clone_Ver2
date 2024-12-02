import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import color from "../../styles/Colors/color";
import AntDesign from '@expo/vector-icons/AntDesign';

const VideoThumbnail = ({video, navigation}) => {
    console.log(video)
    return(
        <TouchableOpacity style={{flex: 1, margin: 5}} onPress={()=>navigation.navigate('VideoListScreen',{selectedVideo: video})}>
            <>
                <View style={{position: 'absolute', zIndex: 10, bottom: 0, padding: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
                         <Image 
                            source={{uri:video?.users?.profileImage}}
                            style={{width: 20, height: 20, borderRadius: 99, backgroundColor: '#fff'}}
                         />
                         <Text style={{color: color.WHITE, fontFamily:'outfit-regular', fontSize: 12}}>{video?.Users?.name}</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', gap:3, alignItems: 'center'}}>
                        <Text style={{fontFamily:'outfit-medium', fontSize: 10, color:color.WHITE}}>2003</Text>
                        <AntDesign name="hearto" size={24} color="white" />
                    </View>
                </View>
    
                <Image 
                    source={{uri: video?.thumbnail}}
                    style={{width: "100%", height: 250, borderRadius: 10}}
                />
            </>
        </TouchableOpacity>
    )
}

export default VideoThumbnail;