import React, { useState, useRef, useEffect } from "react";
import {View, Text, TouchableOpacity, Animated,} from "react-native";
import styles from "../../css/V1/QuickActions_V1_Styles";
import GridBackground from "../GridBackground";
import RefreshButton from "../Refresh_Button";
import ScreenWrapper from "../ScreenWrapper";

const QuickActions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [scheduledTime, setScheduledTime] = useState("");
  const slideAnim = useRef(new Animated.Value(0)).current;

  // Set initial random date when component mounts
  useEffect(() => {
    setScheduledTime(getRandomHourDateTime());
  }, []); // Empty dependency array means this runs once on mount

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
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const randomDay = days[Math.floor(Math.random() * days.length)];
    const randomMonth = months[Math.floor(Math.random() * months.length)];
    const randomDate = Math.floor(Math.random() * 28) + 1;
    const randomHour = Math.floor(Math.random() * 12) + 1;
    const randomAMPM = Math.floor(Math.random() * 2) === 0 ? "AM" : "PM";
    return `${randomDay}, ${randomMonth} ${randomDate}, ${randomHour}:00 ${randomAMPM}`;
  };

  const handleSchedulePress = () => {
    setScheduledTime(getRandomHourDateTime());
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <GridBackground />
        <Text style={styles.title}>Quick Actions</Text>
        {/* Refresh Button */}
        <RefreshButton onPress={RefreshButton.handleRefresh} />

        {/* Custom Animated Toggle */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleSwitch}
          style={styles.toggleContainer}
        >
          <View
            style={[
              styles.toggleBackground,
              { backgroundColor: isEnabled ? "#32CD32" : "#cc3300" },
            ]}
          >
            <Animated.View
              style={[
                styles.thumb,
                {
                  transform: [
                    {
                      translateX: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          4,
                          styles.toggleBackground.width -
                            styles.thumb.width -
                            4,
                        ],
                      }),
                    },
                  ],
                },
              ]}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.toggleText, { opacity: isEnabled ? 1 : 0 }]}>
                ON
              </Text>
              <Text style={[styles.toggleText, { opacity: isEnabled ? 0 : 1 }]}>
                OFF
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Schedule Button */}
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={handleSchedulePress}
        >
          <Text style={styles.scheduleText}>SKIP</Text>
          <Text style={styles.scheduleTimeText}>
            Scheduled At: {scheduledTime}
          </Text>
        </TouchableOpacity>

        {/* Preset Buttons */}
        <TouchableOpacity style={styles.presetButton}>
          <Text style={styles.presetText}>Cold Preset 1</Text>
          <Text style={styles.presetSubText}>
            Enables cooling mode and low temperature
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.presetButton}>
          <Text style={styles.presetText}>Cold Preset 2</Text>
          <Text style={styles.presetSubText}>
            Enables Fan mode with medium temperature
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.presetButton}>
          <Text style={styles.presetText}>My Preset 1</Text>
          <Text style={styles.presetSubText}>My Custom preset for summer</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default QuickActions;
