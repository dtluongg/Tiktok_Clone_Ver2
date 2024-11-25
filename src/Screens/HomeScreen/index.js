import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {useUser} from "@clerk/clerk-expo";
import {supabase} from "../../Hooks/supabaseConfig"

//import create:
import styles from './style'

const HomeScreen = () => {
    const {user} = useUser();
    useEffect(()=>{
        user&&updateProfileImage();
    },[user])
    const updateProfileImage =async () => {
        const {data, error} = await supabase
        .from('Users')
        .update({'profileImage': user?.imageUrl})
        .eq('email',user?.primaryEmailAddress?.emailAddress)
        .is('profileImage', null)
        .select();
        console.log(data)
    }
    return(
        <View style = {styles.homeView}>
            <Text> This is Home Screen</Text>
        </View>
    )
}

export default HomeScreen;