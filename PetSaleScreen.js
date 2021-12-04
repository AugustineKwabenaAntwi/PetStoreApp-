import React, { Component } from 'react'
import {FlatList, View,Text} from "react-native"
import PetStyling from './PetStyling'

export default function PetSaleScreen  () {

        const pets = [
            {name:"Rambo" ,type:"Dog",age:"6 months old",store:"Legon"},
            {name:"Buzz" ,type:"Cat",age:"8 months old",store:"Spintex"},
            {name:"Jimmy" ,type:"Dog",age:"6 months old",store:"Dansoman"},
            {name:"Spiky" ,type:"Dog",age:"6 months old",store:"Agbogba"},
            {name:"Trappy" ,type:"Dog",age:"6 months old",store:"Taifa"},
            {name:"Slither" ,type:"Snake",age:"5 years",store:"Ashaiman"},
            {name:"Stripe" ,type:"Dog",age:"6 months old",store:"Legon"},
            {name:"Orlando" ,type:"Dog",age:"6 months old",store:"Legon"},
            {name:"Cisco" ,type:"Dog",age:"6 months old",store:"Legon"},
            {name:"Sport" ,type:"Dog",age:"6 months old",store:"Legon"},
            {name:"Sly" ,type:"Dog",age:"6 months old",store:"Legon"},
        ]

        return (
            <View>
                <FlatList
                data = {pets}
                renderItem ={({item})=>{
                    return <PetStyling
                    name= {item.name}
                    type = {item.type}
                    age = {item.age}
                    store = {item.store}
                    />
                }}

                keyExtractor={(item)=>item.name}
                />


            </View>
        )
}
