import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { supabase } from "../../Hooks/supabaseConfig";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from 'expo-video-thumbnails';

//import create:
import styles from "./style";

const After_Add_View = ({ navigation }) => {
    // Used to select video from library

    const handleSelectVideoFile = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            const link = 'https://media.istockphoto.com/id/1752533608/vi/video/n%C4%83m-cao-nh%E1%BB%AFng-ng%C6%B0%E1%BB%9Di-kinh-doanh-v%C3%A0-l%C3%A0m-vi%E1%BB%87c-theo-nh%C3%B3m-v%E1%BB%9Bi-s%E1%BB%B1-h%E1%BB%A3p-t%C3%A1c-v%C3%A0-k%E1%BB%B7-ni%E1%BB%87m-trong-m%E1%BB%99t-v%C4%83n.mp4?s=mp4-640x640-is&k=20&c=2-1Ek2wDMrI6fIx72DlnMDwYdMnSrdOkxGYa2XGzGqA=';
        }
    };

    // Used to Genarate the Thumbnail:
    const GenerateThumbnailVideo = async () => {
        try {
            const link= 'https://media.istockphoto.com/id/1752533608/vi/video/n%C4%83m-cao-nh%E1%BB%AFng-ng%C6%B0%E1%BB%9Di-kinh-doanh-v%C3%A0-l%C3%A0m-vi%E1%BB%87c-theo-nh%C3%B3m-v%E1%BB%9Bi-s%E1%BB%B1-h%E1%BB%A3p-t%C3%A1c-v%C3%A0-k%E1%BB%B7-ni%E1%BB%87m-trong-m%E1%BB%99t-v%C4%83n.mp4?s=mp4-640x640-is&k=20&c=2-1Ek2wDMrI6fIx72DlnMDwYdMnSrdOkxGYa2XGzGqA=';
            console.log(link);
            const { uri } = await VideoThumbnails.getThumbnailAsync(
              link,
              {
                time: 15000,
              }
            );
            console.log(uri);
          } catch (e) {
            console.warn(e);
          }
    };

    return (
        <View style={styles.AddView}>
            <Image style={styles.imageIcon} source={require("../../img/AddScreen/upload.png")} />
            <Text style={styles.title}>Start Uploading Short Video</Text>
            <Text style={styles.titleSub}>Lets upload short your video</Text>
            <TouchableOpacity style={styles.buttonUpload} onPress={GenerateThumbnailVideo}>
                <Text style={styles.titleSubmit}>Select Your Video</Text>
            </TouchableOpacity>
        </View>
    );
};

export default After_Add_View;
