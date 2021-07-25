import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// import screens
import CustomerList from '../screens/CustomerList';
import CustomerDetail from '../screens/CustomerDetail';

const Stack = createStackNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name= "Home"
            >
              {props => <CustomerList {...props} />}
              
            </Stack.Screen>
             <Stack.Screen
             name= "Detail"
             component={CustomerDetail}
             options={{title:"Customer Detail"}} />
        </Stack.Navigator>
      
    </NavigationContainer>
  );
};
export default RootNavigator;