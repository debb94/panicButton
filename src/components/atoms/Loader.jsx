import { ActivityIndicator, Dimensions, View } from "react-native";


const Loader = ()=>{
    const height = Dimensions.get("window").height;
    return(
        <View style={{
            position: 'absolute', 
            top: 0, 
            width: '100%',
            height: height,
            backgroundColor: "#00000055",
            zIndex: 200,
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <ActivityIndicator size={"large"}/>
        </View>
    )

}

export default Loader;