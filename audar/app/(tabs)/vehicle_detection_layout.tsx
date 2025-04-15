import { StyleSheet, TouchableOpacity, Image } from 'react-native'

import { Text, View } from '@/components/Themed'
import DetectionInfo from '@/components/DetectionInfo'
import React from 'react'
const VehicleDetectionPage = () => {
  return (
    <View style={styles.container}>
      {/* 상단 타이틀 */}
      <Text style={styles.pageTitle}>Vehicle Detection Page</Text>

      {/* 감지 타이틀 박스 */}
      <View style={styles.titleBox}>
        <Text style={styles.title}>Vehicle Detection Test</Text>
        <Text style={styles.subtitle}>
          Test the system's ability to detect vehicles
        </Text>
      </View>

      {/* 감지 결과 박스 */}
      <View style={styles.scoreBox}>
        <Text style={styles.scoreText}>Detection Score: N/A</Text>
      </View>

      {/* 카메라 영역 (검정 박스 대체용) */}
      <View style={styles.cameraBox} />

      {/* 버튼 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopButton}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VehicleDetectionPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#FFFFFF',
    backgroundColor: '#111',
    paddingVertical: 10,
  },
  titleBox: {
    backgroundColor: '#444',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
    marginTop: 4,
    flexWrap: 'wrap',
  },
  scoreBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginTop: 10,
    alignItems: 'center',
    elevation: 2,
  },
  scoreText: {
    fontSize: 16,
    color: '#00796B',
  },
  cameraBox: {
    flex: 1,
    backgroundColor: '#000',
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 10,
  },
  startButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
  },
  stopButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
})
