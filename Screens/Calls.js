import{View,Text,StyleSheet} from "react-native";

const Calls=()=>{
    return(
        <>
        <View style={styles.container}>
            <Text>Calls</Text>
        </View>
        </>
    )
}

export default Calls;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#888",
        alignItems:"center",
        justifyContent:'center'
    }
})