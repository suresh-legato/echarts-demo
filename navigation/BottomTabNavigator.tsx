import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BarChartScreen from '../screens/BarChart';
import LineChartScreen from '../screens/LineChart';
import PieChartScreen from '../screens/PieChart';
import { BottomTabParamList, BarChartParamList, LineChartParamList, PieChartParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="BarChart"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="BarChart"
        component={BarChartNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="LineChart"
        component={LineChartNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PieChart"
        component={PieChartNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BarChartStack = createStackNavigator<BarChartParamList>();

function BarChartNavigator() {
  return (
    <BarChartStack.Navigator>
      <BarChartStack.Screen
        name="BarChartScreen"
        component={BarChartScreen}
        options={{ headerTitle: 'BarChart' }}
      />
    </BarChartStack.Navigator>
  );
}

const LineChartStack = createStackNavigator<LineChartParamList>();

function LineChartNavigator() {
  return (
    <LineChartStack.Navigator>
      <LineChartStack.Screen
        name="LineChartScreen"
        component={LineChartScreen}
        options={{ headerTitle: 'LineChart' }}
      />
    </LineChartStack.Navigator>
  );
}

const PieChartStack = createStackNavigator<PieChartParamList>();

function PieChartNavigator() {
  return (
    <PieChartStack.Navigator>
      <PieChartStack.Screen
        name="PieChartScreen"
        component={PieChartScreen}
        options={{ headerTitle: 'PieChart' }}
      />
    </PieChartStack.Navigator>
  );
}
