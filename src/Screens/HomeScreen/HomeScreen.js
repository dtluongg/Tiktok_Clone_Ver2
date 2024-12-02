import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { supabase } from "../../Hooks/supabaseConfig";

//import create:
import styles from "./style";
import VideoThumbnail from "./VideoThumbnailItem";

const HomeScreen = ({navigation}) => {
    const { user } = useUser();
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        user && updateProfileImage();
        GetLatestVideoList();
    }, [user]);
    const updateProfileImage = async () => {
        const { data, error } = await supabase
            .from("Users")
            .update({ profileImage: user?.imageUrl })
            .eq("email", user?.primaryEmailAddress?.emailAddress)
            .is("profileImage", null)
            .select();
        };
        const GetLatestVideoList = async () => {
            const { data, error } = await supabase
            .from("PostList")
            .select("*, Users(username,name,profileImage)")
            .range(0, 9);
            setVideoList(data);
    };
    return (
        <View style={styles.homeView}>
            <View style={styles.containerView}>
                <Text style={styles.titleHeader}>Home Screen</Text>
                <Image source={{ uri: user?.imageUrl }} style={styles.image} />
            </View>
            <View>
                <FlatList 
                    numColumns={2}
                    data={videoList}
                    renderItem={({item, index})=>(
                        <VideoThumbnail video={item} navigation={navigation}/>
                    )}
                />
            </View>
        </View>
    );
};

export default HomeScreen;
