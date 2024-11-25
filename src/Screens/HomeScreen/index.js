import React from 'react';
import {View, Text} from 'react-native';

//import create:
import styles from './style'

const HomeScreen = () => {
    return(
        <View style = {styles.homeView}>
            <Text> This is Home Screen</Text>
        </View>
    )
}

export default HomeScreen;