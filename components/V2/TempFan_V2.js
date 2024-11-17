import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../css/V2/TempFan_V2_Styles';
import RefreshButton from '../../components/Refresh_Button';

const TempFan = () => {
  // Generate random initial temperature between 16 and 30
  const getRandomTemp = () => Math.floor(Math.random() * (30 - 16 + 1)) + 16;
  
  // State management
  const [temperature, setTemperature] = useState(getRandomTemp());
  const [fanSpeed, setFanSpeed] = useState(4);
  const [selectedMode, setSelectedMode] = useState(1);

  // Handle refresh
  const handleRefresh = () => {
    setTemperature(getRandomTemp());
  };

  // Set random temperature on initial load
  useEffect(() => {
    setTemperature(getRandomTemp());
  }, []);

  // Temperature adjustment handlers
  const increaseTemp = () => {
    if (temperature < 30) setTemperature(prev => prev + 1);
  };

  const decreaseTemp = () => {
    if (temperature > 16) setTemperature(prev => prev - 1);
  };

  // Fan speed adjustment handlers
  const increaseFanSpeed = () => {
    if (fanSpeed < 5) setFanSpeed(prev => prev + 1);
  };

  const decreaseFanSpeed = () => {
    if (fanSpeed > 1) setFanSpeed(prev => prev - 1);
  };

  // Calculate marker position based on temperature
  const getMarkerPosition = () => {
    const percentage = ((temperature - 16) / (30 - 16)) * 100;
    return `${percentage}%`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#0D1321', '#1D2D44', '#3E5C76']}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      {/* Refresh Button */}
      <RefreshButton onPress={handleRefresh} />

      {/* Temperature Section */}
      <Text style={styles.sectionTitle}>Temperature</Text>
      <View style={styles.temperatureContainer}>
        <View style={styles.temperatureBarContainer}>
          <LinearGradient
            colors={['#23C4FF', '#FFFFFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.temperatureBar}
          />
          <View style={[styles.marker, { left: getMarkerPosition() }]}>
            <View style={styles.triangle} />
          </View>
        </View>
        <View style={styles.controlRow}>
          <TouchableOpacity 
            style={styles.controlButton} 
            onPress={decreaseTemp}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.valueText}>{temperature}°C</Text>
          <TouchableOpacity 
            style={styles.controlButton} 
            onPress={increaseTemp}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Fan Speed Section */}
      <Text style={styles.sectionTitle}>Fan Speed</Text>
      <View style={styles.controlRow}>
        <TouchableOpacity 
          style={styles.controlButton} 
          onPress={decreaseFanSpeed}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.valueText}>{fanSpeed}</Text>
        <TouchableOpacity 
          style={styles.controlButton} 
          onPress={increaseFanSpeed}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Operating Mode Section */}
      <Text style={styles.sectionTitle}>Operating Mode</Text>
      <View style={styles.modeContainer}>
        {[0, 1, 2].map((mode) => (
          <TouchableOpacity 
            key={mode}
            style={[
              styles.modeButton,
              selectedMode === mode && styles.selectedMode
            ]}
            onPress={() => setSelectedMode(mode)}
          >
            <Image 
              source={[
                require("../../images/Cool.png"),
                require("../../images/Dry.png"),
                require("../../images/Fan.png"),
              ][mode]}
              style={[
                styles.modeIcon,
                { tintColor: selectedMode === mode ? '#000' : '#fff' } // Change color based on selection
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default TempFan;