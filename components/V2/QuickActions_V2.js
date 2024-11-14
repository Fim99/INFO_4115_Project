import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import styles from '../../css/V2/QuickActions_V2_Styles';
import RefreshButton from '../Refresh_Button';

const QuickActions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [scheduledTime, setScheduledTime] = useState("");
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setScheduledTime(getRandomHourDateTime());
  }, []);

  const toggleSwitch = () => {
    const toValue = isEnabled ? 0 : 1;
    setIsEnabled(!isEnabled);
    Animated.spring(slideAnim, {
      toValue,
      useNativeDriver: true,
      speed: 12,
      bounciness: 5,
    }).start();
  };

  const getRandomHourDateTime = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const randomHour = Math.floor(Math.random() * 12) + 1;
    const randomMinutes = "00";
    const randomAMPM = Math.random() < 0.5 ? "AM" : "PM";
    return `${randomDay}, ${randomHour}:${randomMinutes} ${randomAMPM}`;
  };

  const handleSchedulePress = () => {
    setScheduledTime(getRandomHourDateTime());
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <RefreshButton onPress={RefreshButton.handleRefresh} />
      </View>

      <View style={styles.gridContainer}>
        {/* Toggle Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleSwitch}
          style={styles.gridItem}
        >
          <View style={[
            styles.toggleButton,
            { backgroundColor: isEnabled ? '#32CD32' : '#cc3300' }
          ]}>
            <Text style={styles.toggleText}>
              {isEnabled ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity
          style={[styles.gridItem, styles.skipButton]}
          onPress={handleSchedulePress}
        >
          <Text style={styles.skipButtonText}>SKIP</Text>
          <Text style={styles.scheduledTimeText}>
            Scheduled At:{'\n'}{scheduledTime}
          </Text>
        </TouchableOpacity>

        {/* Preset Buttons */}
        <TouchableOpacity style={[styles.gridItem, styles.presetButton]}>
          <Text style={styles.presetButtonText}>Cold Preset 1</Text>
          <Text style={styles.presetDescription}>
          Enables cooling mode and low temperature
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridItem, styles.presetButton]}>
          <Text style={styles.presetButtonText}>Cold Preset 2</Text>
          <Text style={styles.presetDescription}>
          Enables Fan mode with medium temperature
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuickActions;