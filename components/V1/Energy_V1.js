import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "../../css/V1/Energy_V1_Styles";
import GridBackground from '../GridBackground';
import RefreshButton from '../Refresh_Button';
import ScreenWrapper from "../ScreenWrapper";

const SmartACScheduling = () => {
  const [lastOnUsage, setLastOnUsage] = useState({ kwh: 0, cost: 0 });
  const [todayUsage, setTodayUsage] = useState({ kwh: 0, cost: 0 });
  const [hourlyData, setHourlyData] = useState([]);

  const generateHourlyData = () => {
    const data = [];
    const currentHour = new Date().getHours();
    
    for (let i = 0; i < 24; i++) {
      const value = (Math.random() * 0.9 + 0.3).toFixed(2);
      const adjustedValue = i > currentHour 
        ? (Math.random() * 0.3 + 0.1).toFixed(2)
        : value;
        
      data.push({
        x: i,
        y: parseFloat(adjustedValue),
      });
    }
    return data;
  };

  const generateRandomUsage = () => {
    const lastOnKwh = (Math.random() * 6 + 2).toFixed(1);
    const lastOnCost = (lastOnKwh * 0.15).toFixed(2);

    const todayKwh = (Math.random() * 7 + 8).toFixed(1);
    const todayCost = (todayKwh * 0.15).toFixed(2);

    const newHourlyData = generateHourlyData();
    
    setLastOnUsage({ kwh: lastOnKwh, cost: lastOnCost });
    setTodayUsage({ kwh: todayKwh, cost: todayCost });
    setHourlyData(newHourlyData);
  };

  useEffect(() => {
    generateRandomUsage();
  }, []);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <GridBackground/>
        <View style={styles.topBar}></View>
        <RefreshButton onPress={RefreshButton.handleRefresh} />
        <View>
          <Text style={styles.usageTitle}>Usage Since Last On</Text>
          <View style={styles.energyBox}>
            <Text style={styles.energyDetail}>{lastOnUsage.kwh} kWh</Text>
            <Text style={styles.energyDetail}>${lastOnUsage.cost}</Text>
          </View>
        </View>
        <View style={styles.topBar}></View>
        <View>
          <Text style={styles.usageTitle}>Usage Today</Text>
          <View style={styles.energyBox}>
            <Text style={styles.energyDetail}>{todayUsage.kwh} kWh</Text>
            <Text style={styles.energyDetail}>${todayUsage.cost}</Text>
          </View>
        </View>
        
        <View style={styles.topBar}></View>
        <View>
          <Text style={styles.usageTitle}>Today's Usage Pattern</Text>
          {hourlyData.length > 0 && (
            <LineChart
              data={{
                labels: ['0', '6', '12', '18', '23'], // Reduced number of labels
                datasets: [
                  {
                    data: hourlyData.map(item => item.y),
                  },
                ],
              }}
              width={320} // Adjusted to fit mobile/web view
              height={185}
              yAxisLabel=""
              yAxisSuffix=" kWh"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(35, 196, 255, ${opacity})`, // Blue color
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "2",
                  strokeWidth: "1",
                  stroke: "#23C4FF",
                },
                propsForBackgroundLines: {
                  strokeDasharray: "", // Solid lines
                },
                propsForLabels: {
                  fontSize: 10,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: "#b1d8fb",
                alignSelf: 'center', 
                maxWidth: 320, 
              }}
              withInnerLines={true}
              withOuterLines={false}
              withHorizontalLabels={true}
              withVerticalLabels={true}
              withDots={true}
              segments={4}
              bezier
            />
          )}
        </View>

        <TouchableOpacity style={styles.usageButton}>
          <Text style={styles.usageButtonText}>View Historical Usage</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default SmartACScheduling;
