import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../../css/V2/Energy_V2_Styles";
import { LinearGradient } from "expo-linear-gradient";
import RefreshButton from "../Refresh_Button";
import ScreenWrapper from "../ScreenWrapper";

const EnergyMonitoringV2 = () => {
  const [usageData, setUsageData] = useState({
    lastOn: { kwh: 0, cost: 0 },
    today: { kwh: 0, cost: 0 },
    month: { kwh: 0, cost: 0 },
    year: { kwh: 0, cost: 0 },
  });

  const [comparisons, setComparisons] = useState({
    daily: 0,
    monthly: 0,
  });

  const generateRandomUsage = () => {
    const generateValues = (min, max) => {
      const kwh = (Math.random() * (max - min) + min).toFixed(1);
      const cost = (kwh * 0.15).toFixed(2);
      return { kwh, cost };
    };

    setUsageData({
      lastOn: generateValues(2, 8), // Last on: 2-8 kWh
      today: generateValues(8, 15), // Today: 8-15 kWh
      month: generateValues(150, 300), // Month: 150-300 kWh
      year: generateValues(2000, 4000), // Year: 2000-4000 kWh
    });

    // Generate random comparison percentages
    setComparisons({
      daily: (Math.random() * 60 - 30).toFixed(1), // Range: -30% to +30%
      monthly: (Math.random() * 60 - 30).toFixed(1), // Range: -30% to +30%
    });
  };

  useEffect(() => {
    generateRandomUsage();
  }, []);

  const UsageBlock = ({ title, data }) => (
    <View style={styles.blockContainer}>
      <Text style={styles.blockTitle}>{title}</Text>
      <View style={styles.energyBox}>
        <Text style={styles.energyDetail}>{data.kwh} kWh</Text>
        <Text style={styles.energyDetail}>${data.cost}</Text>
      </View>
    </View>
  );

  const ComparisonBlock = ({ label, value }) => {
    const numericValue = parseFloat(value);
    const isReduction = numericValue < 0;
    const displayValue = isReduction ? value : `+${value}`;

    return (
      <View style={styles.blockContainer}>
        <Text style={styles.blockTitle}>{label}</Text>
        <View style={styles.comparisonBox}>
          <Text
            style={[
              styles.comparisonValue,
              isReduction ? styles.reductionText : styles.increaseText,
            ]}
          >
            {displayValue}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <LinearGradient
          colors={["#0D1321", "#1D2D44", "#3E5C76"]}
          style={styles.gradientBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <RefreshButton onPress={RefreshButton.handleRefresh} />

        <View style={styles.gridContainer}>
          <UsageBlock title="Usage Since Last On" data={usageData.lastOn} />
          <UsageBlock title="Usage Today" data={usageData.today} />
          <UsageBlock title="Usage This Month" data={usageData.month} />
          <UsageBlock title="Usage This Year" data={usageData.year} />
        </View>

        <View style={styles.gridContainer}>
          <ComparisonBlock
            label="Today vs Yesterday"
            value={comparisons.daily}
          />
          <ComparisonBlock
            label="Month vs Last Month"
            value={comparisons.monthly}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.usageButtonText}>View Historical Usage</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default EnergyMonitoringV2;
