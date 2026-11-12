import React from 'react';
import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { COLORS, FONT_FAMILY } from '@/constants/theme';

const icons = {
  home: { ios: 'house.fill', android: 'home', web: 'home' },
  explore: { ios: 'magnifyingglass', android: 'search', web: 'search' },
  bookings: { ios: 'bag.fill', android: 'shopping_bag', web: 'shopping_bag' },
  more: { ios: 'ellipsis', android: 'more_horiz', web: 'more_horiz' },
} as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.mutedText,
        tabBarActiveBackgroundColor: COLORS.paleGreen,
        tabBarStyle: {
          height: 76,
          paddingHorizontal: 8,
          paddingTop: 6,
          paddingBottom: 8,
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.border,
        },
        tabBarItemStyle: {
          minHeight: 44,
          marginHorizontal: 3,
          marginVertical: 5,
          borderRadius: 14,
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.semibold,
          fontSize: 11,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <SymbolView name={icons.home} tintColor={color} size={21} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <SymbolView name={icons.explore} tintColor={color} size={21} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => (
            <SymbolView name={icons.bookings} tintColor={color} size={21} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <SymbolView name={icons.more} tintColor={color} size={21} />,
        }}
      />
    </Tabs>
  );
}
