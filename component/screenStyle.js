import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create ({
    background: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        alignContent: "center",
        justifyContent: 'center',
        fontSize: 24,
        color: "#ffa17a",
    },
    photoStyle: {
        width: "100%",
        height: 500,
        alignItems: "center",
        
    },
    textUp: {
        width: windowWidth * 1,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        
    },
    photoStyle2: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.52,
        alignItems: "center",
    },
    photoContain: {
        height: 400,
    },
    textContain: {
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginHorizontal: 30,
        marginBottom: 20,
        borderRadius: 15,
      },
});

export default styles;