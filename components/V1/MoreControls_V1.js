// MoreControlsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from '../../css/V1/MoreControls_V1_Styles';
import RefreshButton from '../Refresh_Button';
import GridBackground from '../GridBackground';

// Import the images
const fanIcon = require('../../images/Fan.png');
const ScheduleIcon = require('../../images/Schedule.png');
const EnergyIcon = require('../../images/Energy.png');

const MoreControlsScreen = ({ navigation }) => {
  const controls = [
    {
      title: 'Temperature & Fans',
      backgroundColor: '#589cfb',
      description: 'Allows you to control your temperature, fan speed and operation mode',
      icon: fanIcon,
      onPress: () => navigation.navigate('TempFan_V1'),
    },
    {
      title: 'Scheduling',
      backgroundColor: '#4A4A4A',
      description: 'Schedule a date, time and temperature where you want your AC to turn on',
      icon: ScheduleIcon,
      onPress: () => navigation.navigate('Scheduling_V1'),
    },
    {
      title: 'Energy Monitor',
      backgroundColor: '#01A836',
      description: 'View your energy usage and cost throughout the day, and even historical data',
      icon: EnergyIcon,
      onPress: () => navigation.navigate('Energy_V1'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <GridBackground/>
      <View style={styles.header}>
        {/* Refresh Button */}
        <RefreshButton onPress={RefreshButton.handleRefresh} />
        <Text style={styles.headerText}>More Controls</Text>
      </View>
      <View style={styles.content}>
        {controls.map((control, index) => (
          <View key={control.title} style={styles.controlContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: control.backgroundColor }]}
              onPress={control.onPress}
            >
              <View style={styles.buttonContent}>
                {control.icon ? (
                  <Image 
                    source={control.icon} 
                    style={[styles.icon, { width: 25, height: 25, resizeMode: 'contain' }]} 
                  />
                ) : (
                  <View style={styles.imagePlaceholder} />
                )}
                <Text style={styles.buttonText}>{control.title}</Text>
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
