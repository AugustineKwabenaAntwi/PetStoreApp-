import React, { Component } from 'react'
import {View,StyleSheet,Image,Text} from "react-native"
import { EvilIcons } from '@expo/vector-icons'; 

export default function PetStyling({name,type,age,store}) {
        return (
            <View style={styles.container}>
                <Image style= {styles.Image} source ={require("./assets/cat.jpg")}/>
                <View style={styles.infocontainer}>
                    <Text style={styles.name} numberOfLines={1}>{name}</Text>
                    <Text style={styles.type} numberOfLines={1}>{type}</Text>
                    <Text style = {styles.age}numberOfLines={1}>{age}</Text>
                    <View style ={styles.location}>
                        <View style = {styles.icon}>
                        <EvilIcons name="location" size={30} color="#aaa" />
                        </View>
                        <Text style={styles.store} numberOfLines={1}>{store}</Text>
                    </View>                    
                </View>
                
            </View>
        )
    }


const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical:20,
        alignContent:'center',
    },
    Image:{
        height:200,
        width:200,
        borderRadius:30
    },
    infocontainer:{
        borderWidth:0,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingRight:60,
        marginVertical:10,
        backgroundColor:"#dfe4ed",
        paddingRight:80
    },
    name:{
        fontWeight:"bold",
        fontSize:30,
        marginLeft:15,
       
    },
    type:{
        fontSize:18,
        marginLeft:15,
        marginVertical:2,
        color:"#aaa"
    },
    age:{
        fontSize:18,
        marginLeft:15,
        marginVertical:2,
        color:"#aaa"
    
    },
    location:{
        flexDirection:"row",
    },
    icon:{
        flex:1,
    },
    store:{
        flex:3,
        fontSize:18,
        marginTop:2,
        color:"#aaa"
    }
})