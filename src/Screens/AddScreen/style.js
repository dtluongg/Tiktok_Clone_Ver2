import { StyleSheet } from "react-native";
import color from "../../styles";
const styles = StyleSheet.create({
    AddView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageIcon:{
        width: 140,
        height: 140,
    },
    title: {
        fontFamily: "outfit-bold", // font lấy từ string font đc khai báo trong useFonts
        color: "#000",
        fontSize: 25,
        marginTop: 20,
    },
    titleSub: {
        fontFamily: "outfit-medium",
        color: "#000",
        fontSize: 15,
        marginTop: 20,
    },
    buttonUpload:{
        backgroundColor: color.BLACK,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 99,
        marginTop: 20,
    },
    titleSubmit: {
        fontFamily: "outfit-regular",
        color: "#fff",
        fontSize: 15
    },
});

export default styles;