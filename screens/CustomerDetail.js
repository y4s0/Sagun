import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { getDetail } from '../redux/actions';
import CustomerDetailImage from './CustomerDetailImage';
import { useSelector, useDispatch } from 'react-redux';

const CustomerDetail = ({route ,navigation}) => {

  const {detail} = route.params
  const windowWidth = Dimensions.get('window').width;

  const {customerDetail} = useSelector(state => state.customerReducer);
  const dispatch = useDispatch()
  const fetchDetail = () => dispatch(getDetail(detail["id"]));
    
  useEffect(() => {
    fetchDetail()
  }, [])

  return (
    <View style={{marginTop:10}}>
      <CustomerDetailImage customer={customerDetail} />
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
      <Text>{"Name: " + customerDetail["name"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"City: " + customerDetail["city"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Country: " + customerDetail["country"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"ZipCode: " + customerDetail["zipCode"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Street: " + customerDetail["street"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Email: " + customerDetail["email"]}</Text>
      </View>
      <View style={{marginTop: 20, marginLeft: 8, marginRight: 8}}>
        <Text>{"Phone: " + customerDetail["phone"]}</Text>
      </View>
    </View>
  );
};

export default CustomerDetail;
