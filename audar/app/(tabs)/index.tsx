import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

type FeatureCardProps = {
  icon: any
  title: string
  subtitle: string
  buttonLabel: string
  onPress: () => void
}

const FeatureCard = ({
  icon,
  title,
  subtitle,
  buttonLabel,
  onPress,
}: FeatureCardProps) => (
  <View style={styles.card}>
    <Image source={icon} style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonLabel}</Text>
    </TouchableOpacity>
  </View>
)

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Pedestrian Assistant</Text>
        <Text style={styles.subtitle}>PedNav</Text>
      </View>

      <FeatureCard
        icon={require('../../assets/images/map_logo.png')}
        title="Navigation"
        subtitle="Plan your safe route"
        buttonLabel="Go"
        onPress={() => console.log('Go to Navigation')}
      />
      <FeatureCard
        icon={require('../../assets/images/car_logo.png')}
        title="Vehicle Detection"
        subtitle="Detect nearby vehicles"
        buttonLabel="Start"
        onPress={() => console.log('Start Detection')}
      />
      <FeatureCard
        icon={require('../../assets/images/setting_logo.png')}
        title="Settings"
        subtitle="Manage app features"
        buttonLabel="Open"
        onPress={() => console.log('Open Settings')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 14,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})
