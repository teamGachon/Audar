import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable } from 'react-native'

import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'
import MyIcon from '@/components/MyIcon'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name']
//   color: string
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
// }

function TabBarIcon() {
  return <MyIcon size={28} />
}

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Main Page',
          tabBarIcon: () => <MyIcon size={28} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="navigation_layout"
        options={{
          title: 'Navigation Page',
          tabBarIcon: () => <MyIcon size={28} />,
        }}
      />

      <Tabs.Screen
        name="vehicle_detection_layout"
        options={{
          title: 'Vehicle Detection Page',
          tabBarIcon: () => <MyIcon size={28} />,
        }}
      />
    </Tabs>
  )
}
