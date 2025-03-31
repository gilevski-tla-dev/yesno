import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {HomeScreen} from '../pages/home';
import {CardDetails} from '../pages/cardDetails';

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="CardDetails" component={CardDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
