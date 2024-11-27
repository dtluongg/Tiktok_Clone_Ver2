import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { supabase } from "../../Hooks/supabaseConfig";
import * as ImagePicker from "expo-image-picker";
//import create:
import styles from "./style";

const AddScreen = () => {
    const handleSelectVideoFile = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images", "videos"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.AddView}>
            <Image style={styles.imageIcon} source={require("../../img/AddScreen/upload.png")} />
            <Text style={styles.title}>Start Uploading Short Video</Text>
            <Text style={styles.titleSub}>Lets upload short your video</Text>
            <TouchableOpacity style={styles.buttonUpload} onPress={handleSelectVideoFile}>
                <Text style={styles.titleSubmit}>Select Your Video</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddScreen;
