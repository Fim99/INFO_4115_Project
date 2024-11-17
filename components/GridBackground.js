// components/GridBackground.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get('window');
const GRID_SIZE = 25;

const GridBackground = () => {
  const numColumns = Math.ceil(width / GRID_SIZE);
  const numRows = Math.ceil(height / GRID_SIZE);
  
  const renderGridLines = () => {
    const lines = [];
    
    // Vertical lines
    for (let i = 0; i <= numColumns; i++) {
      lines.push(
        <View
          key={`vertical-${i}`}
          style={[
            styles.gridLine,
            {
              position: 'absolute',
              left: i * GRID_SIZE,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: '#e2f7fb' // Cool blue grid lines
            }
          ]}
        />
      );
    }
    
    // Horizontal lines
    for (let i = 0; i <= numRows; i++) {
      lines.push(
        <View
          key={`horizontal-${i}`}
          style={[
            styles.gridLine,
            {
              position: 'absolute',
              top: i * GRID_SIZE,
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: '#e2f7fb' // Cool blue grid lines
            }
          ]}
        />
      );
    }
    
    return lines;
  };
  
  return (
    <View style={styles.container} pointerEvents="none">
      <LinearGradient
        colors={[
          '#BBDEFB', // Very light blue
          '#E1F5FE', // Light blue
          '#BBDEFB'  // Another very light blue
        ]}
        style={styles.gradientBackground}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <View style={styles.gridContainer}>
        {renderGridLines()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    elevation: 0,
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  gridContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

export default GridBackground;