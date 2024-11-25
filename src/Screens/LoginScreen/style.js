import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get("window").height,
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    content: {
        display: "flex",
        flex: 1,
        paddingTop: 75,
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: color.BACKGROUND_TRASNP,
    },
    title: {
        fontFamily: "outfit-bold", // font lấy từ string font đc khai báo trong useFonts
        color: "#fff",
        fontSize: 25,
        marginTop: 20,
    },
    titleSub: {
        fontFamily: "outfit-regular",
        color: "#fff",
        fontSize: 15,
        marginTop: 20,
    },
    titleSubmit: {
        fontFamily: "outfit-medium",
        color: "#fff",
        fontSize: 15,
        marginTop: 20,
    },
    socialChoose: {
        position: "absolute",
        bottom: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        borderRadius: 99,
    },
    btnGoogle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#2F1A6C",
        borderRadius: 10,
        width: 120,
    },
    logoImage: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "#fff",
    },
    textImage: {
        padding: 5,
        fontSize: 15,
        color: "#fff",
        marginLeft: 5,
        fontFamily: "outfit",
    },
});

export default styles;
