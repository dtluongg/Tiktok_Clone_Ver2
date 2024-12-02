import React, { useEffect } from "react";
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

const Before_Add_View = ({navigation}) => {
    const createParams = useRoute().params;
    

    useEffect(() => {
        console.log(createParams);
    }, []);
    return (
        <KeyboardAvoidingView style={styles.AddViewBefore}>
            <ScrollView style={styles.viewScroll}>
                <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}
                >
                    <Ionicons name="arrow-back-circle" size={44} color="black" style={{ marginRight: 10 }}/>
                    <Text style={{fontSize: 20}}>Go Back</Text>
                </TouchableOpacity>
                <View style={styles.viewBeforeContainer}>
                    <Text style={styles.title}>This is Before Add View</Text>
                    <Image source={{ uri: createParams?.thumbnail }} style={styles.image} />
                    <TextInput
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
                    <TouchableOpacity style={styles.buttonUpload}>
                        <Text style={styles.titleSubmit}>Publish Video</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Before_Add_View;
