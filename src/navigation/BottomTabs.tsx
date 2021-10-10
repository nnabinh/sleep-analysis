import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const EmptyComponent1 = () => {
  return null;
};
const EmptyComponent2 = () => {
  return null;
};
const EmptyComponent3 = () => {
  return null;
};
const EmptyComponent4 = () => {
  return null;
};

const getTabIcon = (color: string, source: ImageSourcePropType) => (
  <View
    style={[
      styles.tabActive,
      {
        backgroundColor: color,
      },
    ]}
  >
    <Image source={source} />
  </View>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          marginTop: -100,
          paddingTop: 23,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderWidth: 1,
          borderColor: colors.grey,
        },
        tabBarActiveTintColor: colors.grey,
        tabBarInactiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={EmptyComponent1}
        options={{
          tabBarIcon: ({ color }) =>
            getTabIcon(color, require('../assets/home_nav.png')),
        }}
      />
      <Tab.Screen
        name="History"
        component={EmptyComponent2}
        options={{
          tabBarIcon: ({ color }) =>
            getTabIcon(color, require('../assets/history_nav.png')),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={EmptyComponent3}
        options={{
          tabBarIcon: ({ color }) =>
            getTabIcon(color, require('../assets/chart_nav.png')),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={EmptyComponent4}
        options={{
          tabBarIcon: ({ color }) =>
            getTabIcon(color, require('../assets/settings_nav.png')),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabActive: {
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
