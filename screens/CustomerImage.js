import React from 'react'
import {Image} from 'react-native'

const CustomerImage = ({customer}) => {
    var url = ""
    if (customer["women"] == true) {
        url = "https://randomuser.me/api/portraits/women/" + customer["id"] + ".jpg"
    } else {
        url = "https://randomuser.me/api/portraits/men/" + customer["id"] + ".jpg"
    }
    return <Image source={{url}} resizeMode="cover"
    style={{width: 100, height: 100, borderRadius: 10}}/>
}

export default CustomerImage