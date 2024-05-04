import{View,Text,StyleSheet} from "react-native";

const Community=()=>{
    return(
        <>
        <View style={styles.container}>
            <Text>Community</Text>
        </View>
        </>
    )
}

export default Community;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#888",
        alignItems:'center',
        justifyContent:'center'
    }
})