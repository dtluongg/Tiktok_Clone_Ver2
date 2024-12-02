import { StyleSheet } from "react-native";
import color from "../../styles";

const styles = StyleSheet.create({
    homeView:{
        padding: 20,
        marginTop: 50
    },
    containerView:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleHeader:{
        fontSize: 30, 
        fontFamily: "outfit-bold",
    },
    image:{
        width: 50,
        height: 50, 
        borderRadius: 99 
    }
});

export default styles;