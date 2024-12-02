import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s3bucket } from "../../Hooks/S3Bucket";
import { supabase } from "../../Hooks/supabaseConfig";

const Before_Add_View = ({ navigation }) => {
    const createParams = useRoute().params;
    const [description, setDescription] = useState();
    const [videoUrl, setVideoUrl] = useState();
    useEffect(() => {
        console.log(createParams);
    }, []);

    const UploadFileToAws = async (file, type) => {
        const fileType = file.split(".").pop();
        const params = {
            Bucket: "tiktok-app",
            Key: `videotiktok-${Date.now()}.${fileType}`, // Ví dụ: videotiktok-23134234.mp4
            Body: await fetch(file).then((resp) => resp.blob()),
            ACL: "public-read",
            ContentType: type == "video" ? `video/${fileType}` : `image/${fileType}`,
        };
        try {
            const resp = await s3bucket.upload(params).promise();
            console.log("File Upload Success:", resp?.Location);
            return resp?.Location;
        } catch (e) {
            console.log("File Upload Error:", e);
            return null;
        }
    };
    const handlePublish = async () => {
        const videoUrl = await UploadFileToAws(createParams.video, "video");
        const thumbnailUrl = await UploadFileToAws(createParams.thumbnail, "image");
        const { data: session } = await supabase.auth.getSession();
        const email = session?.user?.email || "dotienluong1402@gmail.com";
        const postData = {
            videoUrl: videoUrl,
            thumbnail: thumbnailUrl,
            description: description,
            emailRef: email,
        };

        const { dataPost, error } = await supabase.from("PostList").insert([postData]).select();

        if (error) {
            console.log("Supabase insert error: ", error);
        } else {
            console.log("Post Data inserted", dataPost);
        }
    };
    return (
        <KeyboardAvoidingView style={styles.AddViewBefore}>
            <ScrollView style={styles.viewScroll}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
                >
                    <Ionicons
                        name="arrow-back-circle"
                        size={44}
                        color="black"
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{ fontSize: 20 }}>Go Back</Text>
                </TouchableOpacity>
                <View style={styles.viewBeforeContainer}>
                    <Text style={styles.title}>This is Before Add View</Text>
                    <Image source={{ uri: createParams?.thumbnail }} style={styles.image} />
                    <TextInput
                        onChangeText={(value) => setDescription(value)}
                        numberOfLines={3}
                        placeholder="Description"
                        style={{
                            borderWidth: 1,
                            width: "100%",
                            borderRadius: 15,
                            marginTop: 25,
                            borderColor: "#000",
                            paddingHorizontal: 20,
                        }}
                    />
                    <TouchableOpacity style={styles.buttonUpload} onPress={handlePublish}>
                        <Text style={styles.titleSubmit}>Publish Video</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Before_Add_View;
