// MoreControlsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import styles from '../../css/V2/MoreControls_V2_Styles';
import { LinearGradient } from "expo-linear-gradient";
import RefreshButton from '../Refresh_Button';

// Import the images
const fanIcon = require('../../images/Fan.png');
const ScheduleIcon = require('../../images/Schedule.png');
const EnergyIcon = require('../../images/Energy.png');

const MoreControlsScreen = ({ navigation }) => {
  const controls = [
    {
      backgroundColor: '#79a2f3',  // Light blue color
      icon: fanIcon,
      description: 'Allows you to control your temperature, fan speed and operation mode',
      onPress: () => navigation.navigate('TempFan_V2'),
    },
    {
      backgroundColor: '#acafac',  // Light gray color
      icon: ScheduleIcon,
      description: 'Schedule a date, time and temperature where you want your AC to turn on',
      onPress: () => navigation.navigate('Scheduling_V2'),
    },
    {
      backgroundColor: '#A5FFAC',  // Light green color
      icon: EnergyIcon,
      description: 'View your energy usage and cost throughout the day, and even historical data',
      onPress: () => navigation.navigate('Energy_V2'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#0D1321', '#1D2D44', '#3E5C76']}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>More Controls</Text>
        <RefreshButton onPress={RefreshButton.handleRefresh} />
      </View>

      {/* Controls */}
      <View style={styles.content}>
        {controls.map((control, index) => (
          <View key={control.title} style={styles.controlRow}>
            <TouchableOpacity
              style={[styles.controlButton, { backgroundColor: control.backgroundColor }]}
              onPress={control.onPress}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={control.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.descriptionText}>{control.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MoreControlsScreen;