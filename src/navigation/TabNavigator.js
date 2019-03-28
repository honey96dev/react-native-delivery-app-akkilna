import React from "react";
import { Platform, Image } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import HomeScreen from "../component/homeScreen";
import AccountScreen from "../component/AccountScreen";
import Orders from "../component/Orders/Orders";
import CartScreen from "../component/CartScreen/CartScreen";
import CalendarScreen from "../component/CalendarScreen/CalendarScreen";
import OrdersScreen from "../component/Orders/Orders";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  { headerMode: "none" }
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Home</Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Image source={require('../../assets/Images/search.png')} style={{ height: 30, width: 30, resizeMode:'contain',tintColor: tintColor }} />
  ),
};

const AccountStack = createStackNavigator(
  {
    Account: AccountScreen
  },
  { headerMode: "none" }
);

AccountStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Account</Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Image source={require('../../assets/Images/user.png')} style={{ height: 24, width: 24, resizeMode:'contain',tintColor: tintColor }} />
  ),
  headerMode: "none"
};

const CartStack = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  { headerMode: "none" }
);

CartStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text style={{ color: focused ? "white" : "#D3D3D3" }}>Cart</Text>
  ),
  tabBarIcon: ({ tintColor }) => (
    <Image source={require('../../assets/Images/bag.png')} style={{ height: 24, width: 24, resizeMode:'contain',tintColor: tintColor }} />
  )
};






export default createBottomTabNavigator(
  {
    HomeStack,
    CartStack,
    AccountStack
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgb(70,5,131)',
    inactiveTintColor: 'rgb(173,173,173)',
    showLabel:false,
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 1
    }
  }
  });
