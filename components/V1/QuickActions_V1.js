import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import styles from "../../css/V1/QuickActions_V1_Styles";
import GridBackground from "../GridBackground";
import RefreshButton from "../Refresh_Button";
import ScreenWrapper from "../ScreenWrapper";

const QuickActions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [scheduledTime, setScheduledTime] = useState("");
  const [toggleWidth, setToggleWidth] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const toggleRef = useRef(null);

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
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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

  // Constants for toggle dimensions
  const THUMB_WIDTH = 42;
  const TOGGLE_PADDING = 4;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <GridBackground />
        <Text style={styles.title}>Quick Actions</Text>
        
        <RefreshButton onPress={RefreshButton.handleRefresh} />

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleSwitch}
            style={{ width: '80%' }}
          >
            <View
              ref={toggleRef}
              onLayout={(event) => {
                setToggleWidth(event.nativeEvent.layout.width);
              }}
              style={[
                styles.toggleBackground,
                { backgroundColor: isEnabled ? "#32CD32" : "#cc3300" }
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
                            TOGGLE_PADDING,
                            toggleWidth - THUMB_WIDTH - TOGGLE_PADDING
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
        </View>

        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={handleSchedulePress}
        >
          <Text style={styles.scheduleText}>SKIP</Text>
          <Text style={styles.scheduleTimeText}>
            Scheduled At: {scheduledTime}
          </Text>
        </TouchableOpacity>

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