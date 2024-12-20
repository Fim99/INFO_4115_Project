import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../css/V2/Home_V2_Styles";
import { LinearGradient } from "expo-linear-gradient";
import RefreshButton from "../Refresh_Button";
import { ScreenContainer, ScreenContentWrapper } from "react-native-screens";
import ScreenWrapper from "../ScreenWrapper";

// Helper functions
const getRandomTemperature = () => {
  return Math.floor(Math.random() * (30 - 16 + 1)) + 16;
};

const getRandomHourDateTime = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan","Feb","Mar","Apr","May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec",];
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const randomMonth = months[Math.floor(Math.random() * months.length)];
  const randomDate = Math.floor(Math.random() * 28) + 1;
  const randomHour = Math.floor(Math.random() * 12) + 1;
  const randomAMPM = Math.floor(Math.random() * 2) === 0 ? "AM" : "PM";
  return `${randomDay}, ${randomMonth} ${randomDate} \n ${randomHour}:00 ${randomAMPM}`;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isOn, setIsOn] = useState(Math.random() < 0.5);
  const [temperature, setTemperature] = useState(getRandomTemperature());
  const [nextSchedule, setNextSchedule] = useState(getRandomHourDateTime());

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <LinearGradient
          colors={["#0D1321", "#1D2D44", "#3E5C76"]}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        {/* Refresh Button */}
        <RefreshButton onPress={RefreshButton.handleRefresh} />
        {/* Welcome Text and Refresh Button */}
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>WELCOME</Text>
        </View>

        {/* Control Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => navigation.navigate("QuickActions_V2")}
          >
            <Text style={styles.buttonText}>Quick Actions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={() => navigation.navigate("MoreControls_V2")}
          >
            <Text style={styles.buttonText}>More Controls</Text>
          </TouchableOpacity>
        </View>

        {/* Temperature Display */}
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>{temperature}°C</Text>
        </View>

        {/* Status and Schedule */}
        <View style={styles.infoContainer}>
          <View
            style={[
              styles.statusBox,
              { backgroundColor: isOn ? "#4CAF50" : "#cc3300" },
            ]}
          >
            <Text style={styles.statusText}>
              Currently: {isOn ? "ON" : "OFF"}
            </Text>
          </View>

          <View style={styles.scheduleBox}>
            <Text style={styles.infoText}>
              Next Scheduled:{"\n"}
              {nextSchedule}
            </Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
