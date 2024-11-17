import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { RadialSlider } from "react-native-radial-slider";
import { Slider } from "@rneui/themed";
import styles from "../../css/V1/TempFan_V1_Styles";
import GridBackground from '../GridBackground';
import RefreshButton from '../../components/Refresh_Button';

const TempFan = () => {
  // Generate random initial temperature between 16 and 30
  const getRandomTemp = () => Math.floor(Math.random() * (30 - 16 + 1)) + 16;
  
  // State for temperature, fan speed, and operating mode
  const [speed, setSpeed] = useState(getRandomTemp()); // Random initial temperature
  const [fanSpeed, setFanSpeed] = useState(0); // Fan speed, range 0-4
  const [mode, setMode] = useState(0); // Operating mode (0 = Cool, 1 = Dry, 2 = Fan)

  // Helper to get the image corresponding to the selected mode
  const getOperatingModeImage = (value) => {
    const images = [
      require("../../images/Cool.png"),
      require("../../images/Dry.png"),
      require("../../images/Fan.png"),
    ];
    return images[value];
  };

  return (
    <View style={styles.container}>
      <GridBackground/>
      {/* Refresh Button */}
      <RefreshButton onPress={RefreshButton.handleRefresh} />
      {/* Temperature Control with Radial Slider */}
      <View style={styles.sliderContainer}>
        <RadialSlider
          radius={125}
          value={speed}
          min={16}
          max={30}
          onChange={setSpeed}
          valueStyle={{ fontSize: 50 }}
          unit={"℃"}
          thumbColor={"#589cfb"}
          sliderTrackColor={"#fff"}
          lineColor={"#23C4FF"}
          linearGradient={[ { offset: '0%', color:'#589cfb' }, { offset: '100%', color: '#fff' }]}
          isHideLines
          isHideButtons
          isHideSubtitle
        />
      </View>

      {/* Fan Speed Control */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sectionTitle}>Fan Speed</Text>
        <Slider
          value={fanSpeed}
          onValueChange={setFanSpeed}
          minimumValue={0}
          maximumValue={4}
          step={1}
          thumbTintColor={styles.slider.thumbColor}
          minimumTrackTintColor={styles.slider.activeColor}
          maximumTrackTintColor={styles.slider.inactiveColor}
          style={{ width: styles.slider.width }}
        />
        {/* Labels for each fan speed level */}
        <View style={styles.labelContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text key={index} style={styles.label}>
              {index + 1}
            </Text>
          ))}
        </View>
      </View>

      {/* Operating Mode Control */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sectionTitle}>Operating Mode</Text>
        <Slider
          value={mode}
          onValueChange={setMode}
          minimumValue={0}
          maximumValue={2}
          step={1}
          thumbTintColor={styles.slider.thumbColor}
          minimumTrackTintColor={styles.slider.activeColor}
          maximumTrackTintColor={styles.slider.inactiveColor}
          style={{ width: styles.slider.width }}
        />
        {/* Display icons for each operating mode */}
        <View style={styles.labelContainer}>
          {[0, 1, 2].map((i) => (
            <Image key={i} source={getOperatingModeImage(i)} style={styles.modeIcon} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default TempFan;