import{View,Text,StyleSheet} from "react-native";

const Status=()=>{
    return(
        <>
        <View style={styles.container}>
            <Text>Status</Text>
        </View>
        </>
    )
}

export default Status;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#888",
        alignItems:'center',
        justifyContent:'center'
    }
})