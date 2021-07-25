import React from 'react'
import {Image} from 'react-native'

const CustomerDetailImage = ({customer}) => {
    var url = ""
    if (customer["women"] == true) {
        url = "https://randomuser.me/api/portraits/women/" + customer["id"] + ".jpg"
    } else {
        url = "https://randomuser.me/api/portraits/men/" + customer["id"] + ".jpg"
    }
    return <Image source={{url}} resizeMode="cover"
    style={{height: 200, borderRadius: 10}}/>
}

export default CustomerDetailImage