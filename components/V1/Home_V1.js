// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/V1/Home_V1_Styles';
import RefreshButton from '../Refresh_Button';
import GridBackground from '../GridBackground';

// Helper functions
const getRandomTemperature = () => {
  return Math.floor(Math.random() * (30 - 16 + 1)) + 16;
};

const getRandomHourDateTime = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDate = Math.floor(Math.random() * 28) + 1;
  const randomHour = Math.floor(Math.random() * 12) + 1;
  const randomAMPM = Math.floor(Math.random() * 2) === 0 ? "AM" : "PM";
  return `${randomDay}, ${randomMonth} ${randomDate}, ${randomHour}:00 ${randomAMPM}`;
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const [isOn, setIsOn] = useState(Math.random() < 0.5);
  const [temperature, setTemperature] = useState(getRandomTemperature());
  const [nextSchedule, setNextSchedule] = useState(getRandomHourDateTime());

  return (
    <SafeAreaView style={styles.container}>
      <GridBackground/>    
      {/* Refresh Button */}
      <RefreshButton onPress={RefreshButton.handleRefresh} />
      
      {/* Main Content Container */}
      <View style={styles.contentContainer}>
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>WELCOME</Text>

        {/* Temperature Display */}
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>{temperature}°C</Text>
        </View>

        {/* Status Display */}
        <View style={[
          styles.statusContainer,
          { backgroundColor: isOn ? '#4CAF50' : '#cc3300' }
        ]}>
          <Text style={styles.statusText}>Currently: {isOn ? 'ON' : 'OFF'}</Text>
        </View>

        {/* Next Schedule */}
        <View style={styles.scheduleContainer}>
          <Text style={styles.scheduleText}>Next Scheduled:{'\n'} {nextSchedule}</Text>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('QuickActions_V1')}>
          <Text style={styles.buttonText}>Quick Actions</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('MoreControls_V1')}>
          <Text style={styles.buttonText}>More Controls</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;