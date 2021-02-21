import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { BottomTabParamList, HomeParamList, SignInParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon name="search-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SignIn"
        component={SignInNavigator}
        options={{
          tabBarIcon: ({ color }) => <SignInIcon name="log-in-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeIcon = (props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const SignInIcon = (props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const SignInStack = createStackNavigator<SignInParamList>();
const SignInNavigator = () => {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTitle: 'SignIn' }}
      />
    </SignInStack.Navigator>
  );
}
