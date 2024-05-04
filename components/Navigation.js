import{View,Text,StyleSheet} from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import{MaterialCommunityIcons}from "react-native-vector-icons"

import Chat from "../Screens/Chat";
import Calls from "../Screens/Calls";
import Status from "../Screens/Status";
import Community from "../Screens/Community";

const Tab=createMaterialTopTabNavigator();

const Navigation=()=>{
    return(
        
       <Tab.Navigator
       initialRouteName='Chat'
       screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarIndicatorStyle:{
            backgroundColor:'white'
        },
        tabBarLabelStyle:{
            fontWeight:'bold',
            fontSize:11.5
        },
        tabBarStyle:{
            backgroundColor:'#0e806a'
        }
       }}
       >

            <Tab.Screen
            name='Community'
            component={Community}
            options={{
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name='account-group' size={24} color={color}/>
                    ),
                tabBarLabelStyle:styles.tabBarLabel
            }}/>

            <Tab.Screen
            name='Chat'
            component={Chat}/>

            <Tab.Screen
            name='Status'
            component={Status}/>

              <Tab.Screen
            name='Calls'
            component={Calls}
                />
       </Tab.Navigator>
    )
}

export default Navigation;

const styles= StyleSheet.create({
    tabBarLabel:{
       display:'none',
    }
})