import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function MyIcon({ size = 28 }) {
  return (
    <Image
      source={require('@/assets/icons/nav_main_logo.png')}
      style={[styles.icon, { width: size, height: size }]}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
})
