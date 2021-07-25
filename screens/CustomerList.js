import React, { useEffect, useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Dimensions} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomer } from '../redux/actions';
import {Card} from 'react-native-shadow-cards';
import CustomerImage from './CustomerImage';
import RNPickerSelect from 'react-native-picker-select';

const CustomerList = ({navigation}) => {

  const screenWidth =  Dimensions.get('window').width
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setVisible(true)} title="Filter" />
      )
    })
  })

  const {customerList} = useSelector(state => state.customerReducer);
  const dispatch = useDispatch()
  const [tempList, setTempList] = useState(customerList)
  const fetchCustomer = () => dispatch(getCustomer());

  
  const cityList = customerList.map(item => {
    return { label: item.city, value: item.city}
  })
  function filterAccordingState() {
    const list = customerList.filter()
  }

  function filterAccourdingCity(value) {
    if (value == null) {
      setTempList(customerList)
    } else {
    setTempList(customerList.filter(item => item.city == value))
    }
  }

  useEffect(() => {
      fetchCustomer()
  }, [])

  return (
    <View style={{flex:1, paddingHorizontal: 20 }}>
      <View style={{flex:1}}>
        <View style={{height:30, marginTop: 8}}>
        <RNPickerSelect
            onValueChange={(value) => filterAccourdingCity(value)}
            useNativeAndroidPickerStyle={true}
            items={cityList}
        />
        </View>
          <FlatList
          data={tempList}
          renderItem={({item}) => {
              return (
                <TouchableOpacity 
                onPress={ () => navigation.push('Detail', {detail: item})}
                >
                  <View style={{marginTop:10}}>
                  <Card>
                    <View style={{flexDirection:'row', marginTop: 8, marginLeft:8, marginBottom:8, marginRight:8 }}>
                    <CustomerImage customer={item}></CustomerImage>
                      <View style={{flexDirection: 'column', marginLeft: 20}}>
                        <View>
                          <Text>{"Name: " + item["name"]}</Text>
                        </View>
                        <View style={{marginTop:8}}>
                          <Text>{"City: " + item["city"]}</Text>
                        </View>
                        <View style={{marginTop:8}}>
                          <Text>{"Email: " + item["email"]}</Text>
                        </View>
                      </View>
                    </View>
                  </Card>
                  </View>
                </TouchableOpacity>
              );
          }}
          >
          </FlatList>

      </View>
    </View>
  );
};

export default CustomerList;
